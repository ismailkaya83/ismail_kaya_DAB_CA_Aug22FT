var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var db = require("../models");
var UserService = require("../services/userService")
var userService = new UserService(db);

passport.use(new LocalStrategy(function verify(username, password, cb) {
    userService.getOneByName(username).then((data) => {
        if (data === null) {
            return cb(null, false, {message: 'Incorrect username or password.'});
        }
        return cb(null, data);
    });
}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {id: user.id, username: user.Username, role: user.Role});
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

var router = express.Router();
router.get('/login', function (req, res, next) {
    const user = req.user;
    res.render('login', {user});
});

router.post('/login/password', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
}));

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });
});

router.get('/signup', function (req, res, next) {
    res.render('signup');
});

router.post('/signup', function (req, res, next) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const fullname = firstname + " " + lastname;
    const username = req.body.username;
    const password = req.body.password;
    userService.create(fullname, username, password);
    res.redirect('/login');
});

module.exports = router;
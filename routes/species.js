var express = require('express');
var router = express.Router();
var SpeciesService = require('../services/speciesService');
var db = require('../models');
var speciesService = new SpeciesService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var {checkIfAuthorized, isAdmin} = require('./authMiddlewares');

router.get('/', checkIfAuthorized, isAdmin, jsonParser, async function (req, res, next) {
    let species = await speciesService.get();
    let user = req.user;
    res.render("species", {species: species, user}); // Pass message to EJS template
})

router.post('/add', checkIfAuthorized, isAdmin, jsonParser, jsonParser, async function (req, res, next) {
    let Name = req.body.Name;
    await speciesService.create(Name);
    res.end();
});

router.post('/update', checkIfAuthorized, isAdmin, jsonParser, async function (req, res, next) {
    let Name = req.body.Name;
    let Id = req.body.id;
    await speciesService.update(Id, Name);
    res.end();
});

router.post('/delete', checkIfAuthorized, isAdmin, jsonParser, async function (req, res, next) {
    let Id = req.body.id;
    await speciesService.delete(Id);
    res.end();
});

module.exports = router;
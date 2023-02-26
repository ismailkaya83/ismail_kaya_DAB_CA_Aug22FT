var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let message = res.locals.message; // Check if message is present in res.locals
  const user = req.user;
  res.render('index', { title: 'Express', user, message});
});

module.exports = router;


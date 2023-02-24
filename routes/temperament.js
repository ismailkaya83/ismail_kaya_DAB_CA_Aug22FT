var express = require('express');
var router = express.Router();
var TemperamentService = require('../services/temperamentService');
var db = require('../models');
var temperamentService = new TemperamentService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
    let temperament = await temperamentService.get();
    res.render("temperament", {user: null, temperament: temperament})
});

router.post('/add', jsonParser, async function (req, res, next) {
    let Name = req.body.Name;
    await temperamentService.create(Name);
    res.end();
});

router.post('/update', async function (req, res, next) {
    let Name = req.body.Name;
    let Id = req.body.id;
    await temperamentService.update(Id, Name);
    res.end();
});

router.post('/delete', async function (req, res, next) {
    let Id = req.body.id;
    await temperamentService.delete(Id);
    res.end();
});

module.exports = router;
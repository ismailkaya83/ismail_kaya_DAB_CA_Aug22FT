var express = require('express');
var router = express.Router();
var SpeciesService = require('../services/speciesService');
var db = require('../models');
var speciesService = new SpeciesService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.get('/', async function (req, res, next) {
    let species = await speciesService.get();
    res.render("species", {species: species, user: null});
})

router.post('/add', jsonParser, async function (req, res, next) {
    let Name = req.body.Name;
    await speciesService.create(Name);
    res.end();
});

router.post('/update', async function (req, res, next) {
    let Name = req.body.Name;
    let Id = req.body.id;
    await speciesService.update(Id, Name);
    res.end();
});

router.post('/delete', async function (req, res, next) {
    let Id = req.body.id;
    await speciesService.delete(Id);
    res.end();
});

module.exports = router;
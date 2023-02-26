var express = require('express');
var router = express.Router();
var db = require('../models');
var AnimalService = require('../services/animalService');
var animalService = new AnimalService(db);
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var { checkIfAuthorized, canAdopt } = require("./authMiddlewares")

router.get('/', checkIfAuthorized, jsonParser, async function (req, res, next) {
    const animals = await animalService.get();

    for (let i = 0; i < animals.length; i++) {
        const animal = animals[i];
        animal.dataValues.Age = await animalService.calculateAge(animal.id);
    }
    const user = req.user;
    res.render('animals', {animals: animals, user});
});

router.post('/adopt', checkIfAuthorized, canAdopt, jsonParser, async function (req, res, next) {
    let id = req.body.id;
    await animalService.adopt(id);
    res.end();
});

router.post('/cancelAdoption', checkIfAuthorized, canAdopt, jsonParser, async function (req, res, next) {
    let id = req.body.id;
    await animalService.cancelAdoption(id);
    res.end();
});

module.exports = router;


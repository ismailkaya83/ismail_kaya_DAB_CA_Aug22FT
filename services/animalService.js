const db = require("../models");

class AnimalService {
    constructor() {
        this.Animal = db.Animal;
        console.log(db);
    }

    async get() {
        try {
            return this.Animal.findAll({
                include: [
                    {model: db.Specie},
                    {model: db.Size},
                    {model: db.Temperaments},
                ],
                where: {}
            });
        } catch (err) {
            console.error(err);
        }
    }

    async adopt(animalId) {
        return this.Animal.update(
            {
                Adopted: true
            },
            {
                where: {id: animalId}
            }
        )
    }

    async cancelAdoption(animalId) {
        return this.Animal.update(
            {
                Adopted: false
            },
            {
                where: {id: animalId}
            }
        )
    }

    // calculate the age of the animal, based on the date of birth
    async calculateAge(animalId) {
        const animal = await this.Animal.findOne({
            where: {
                id: animalId
            }
        });
        const dateOfBirth = animal.Birthday;
        const currentDate = new Date().toISOString().slice(0, 10);
        return currentDate.slice(0, 4) - dateOfBirth.slice(0, 4);
    }
}

module.exports = AnimalService;
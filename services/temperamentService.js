class TemperamentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Temperaments = db.Temperaments;
        console.log(db);
    }

    async create(name) {
        return this.Temperaments.create(
            {
                Name: name,
            }
        )
    }

    async get() {
        return this.Temperaments.findAll({
            where: {}
        })
    }

    async delete(temperamentId) {
        return this.Temperaments.destroy({
            where: {id: temperamentId}
        })
    }

    async update(temperamentId, name) {
        return this.Temperaments.update(
            {
                Name: name
            },
            {
                where: {id: temperamentId}
            }
        )
    }
}

module.exports = TemperamentService;
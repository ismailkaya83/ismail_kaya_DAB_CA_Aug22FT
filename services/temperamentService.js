class TemperamentService {
    constructor(db) {
        this.client = db.sequelize;
        this.Temperament = db.Temperament;
        console.log(db);
    }

    async create(name) {
        return this.Temperament.create(
            {
                Name: name,
            }
        )
    }

    async get() {
        return this.Temperament.findAll({
            where: {}
        })
    }

    async delete(temperamentId) {
        return this.Temperament.destroy({
            where: {id: temperamentId}
        })
    }

    async update(temperamentId, name) {
        return this.Temperament.update(
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
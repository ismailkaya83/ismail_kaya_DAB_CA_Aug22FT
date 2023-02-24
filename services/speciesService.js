class SpeciesService {
    constructor(db) {
        this.client = db.sequelize;
        this.Specie = db.Specie;
        console.log(db);
    }

    async create(name) {
        return this.Specie.create(
            {
                Name: name,
            }
        )
    }

    async get() {
        return this.Specie.findAll({
            where: {}
        })
    }

    async delete(speciesId) {
        return this.Specie.destroy({
            where: {id: speciesId}
        })
    }

    async update(speciesId, name) {
        return this.Specie.update(
            {
                Name: name
            },
            {
                where: {id: speciesId}
            }
        )
    }
}

module.exports = SpeciesService;
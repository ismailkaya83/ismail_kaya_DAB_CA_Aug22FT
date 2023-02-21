module.exports = (sequelize, Sequelize) => {
    const Adoption = sequelize.define('Adoption', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AnimalId: Sequelize.INTEGER,
        AdopterId: Sequelize.INTEGER
    },{
        timestamps: false
    });
    Adoption.associate = function(models) {
        Adoption.belongsTo(models.Animal);
        Adoption.belongsTo(models.User, {as: 'Adopter'});
    };
    return Adoption
}

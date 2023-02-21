module.exports = (sequelize, Sequelize) => {
    const Animal_Temperament = sequelize.define('Animal_Temperament', {
        AnimalId: Sequelize.INTEGER,
        TemperamentId: Sequelize.INTEGER
    },{
        timestamps: false
    });
    Animal_Temperament.associate = function(models) {
        Animal_Temperament.belongsTo(models.Animal);
        Animal_Temperament.belongsTo(models.Temperament);
    };
    return Animal_Temperament
}

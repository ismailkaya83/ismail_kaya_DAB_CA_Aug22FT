module.exports = (sequelize, Sequelize) => {
    const Animal_Temperament = sequelize.define('Animal_Temperament', {
        AnimalId: Sequelize.DataTypes.STRING,
        TemperamentId: Sequelize.DataTypes.STRING
    }, {
        timestamps: false
    });
    return Animal_Temperament
}

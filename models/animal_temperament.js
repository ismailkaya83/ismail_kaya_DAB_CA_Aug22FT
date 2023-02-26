module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Animal_Temperament', {
        AnimalId: Sequelize.DataTypes.STRING,
        TemperamentId: Sequelize.DataTypes.STRING
    }, {
        timestamps: false
    })
}

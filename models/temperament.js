module.exports = (sequelize, Sequelize) => {
    const Temperaments = sequelize.define('Temperaments', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Temperaments.associate = function(models) {
        Temperaments.belongsToMany(models.Animal, {through: models.Animal_Temperament, foreignKey: 'TemperamentId'})
    }
    return Temperaments
}
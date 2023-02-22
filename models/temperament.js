module.exports = (sequelize, Sequelize) => {
    const Temperament = sequelize.define('Temperament', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Temperament.associate = function(models) {
        Temperament.belongsToMany(models.Animal, {through: models.Animal_Temperament})
    }
    return Temperament
}
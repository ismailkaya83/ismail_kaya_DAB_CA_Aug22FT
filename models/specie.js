module.exports = (sequelize, Sequelize) => {
    const Specie = sequelize.define('Specie', {
        Name: Sequelize.DataTypes.STRING
    }, {
        timestamps: false
    });
    Specie.associate = function (models) {
        Specie.hasMany(models.Animal, {foreignKey: 'SpecieId'})
    }
    return Specie
}
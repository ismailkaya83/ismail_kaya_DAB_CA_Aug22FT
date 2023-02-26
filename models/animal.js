module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        Name: Sequelize.DataTypes.STRING,
        Birthday: Sequelize.DataTypes.DATEONLY,
        Adopted: {
            type: Sequelize.DataTypes.BOOLEAN,
            default: false
        },
    }, {
        timestamps: false
    });
    Animal.associate = function (models) {
        Animal.belongsTo(models.Specie, {foreignKey: 'SpecieId'});
        Animal.belongsTo(models.Size, {foreignKey: 'SizeId'});
        Animal.belongsTo(models.User, {foreignKey: 'UserId'});
        Animal.belongsToMany(models.Temperaments, {through: models.Animal_Temperament, foreignKey: 'AnimalId'});
    }
    return Animal
}

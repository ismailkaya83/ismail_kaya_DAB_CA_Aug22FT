module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        Name: Sequelize.DataTypes.STRING,
        Birthday: Sequelize.DataTypes.DATEONLY,
        Adopted: {
            type: Sequelize.DataTypes.BOOLEAN,
            values: [true, false],
            default: false
        },
    }, {
        timestamps: false
    });
    Animal.associate = function (models) {
        Animal.belongsTo(models.Specie);
        Animal.belongsTo(models.Size);
        Animal.belongsToMany(models.Temperament, {through: models.Animal_Temperament})
    }
    return Animal
}

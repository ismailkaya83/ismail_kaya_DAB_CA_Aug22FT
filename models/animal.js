module.exports = (sequelize, Sequelize) => {
    const Animal = sequelize.define('Animal', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: Sequelize.STRING,
        Species: Sequelize.STRING,
        Birthday: Sequelize.DATEONLY,
        Size: Sequelize.STRING,
        Adopted: Sequelize.BOOLEAN
    },{
        timestamps: false
    });
    Animal.associate = function(models) {
        Animal.belongsToMany(models.Temperament, {through: 'Animal_Temperaments'});
        Animal.belongsTo(models.User, {as: 'Adopter', foreignKey: 'AdoptedBy'});
    };
    return Animal
}

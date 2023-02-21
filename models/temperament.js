module.exports = (sequelize, Sequelize) => {
    const Temperament = sequelize.define('Temperament', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: Sequelize.STRING
    },{
        timestamps: false
    });
    Temperament.associate = function(models) {
        Temperament.belongsToMany(models.Animal, {through: 'Animal_Temperaments'});
    };
    return Temperament
}

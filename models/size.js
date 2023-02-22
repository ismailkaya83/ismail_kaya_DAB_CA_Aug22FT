module.exports = (sequelize, Sequelize) => {
    const Size = sequelize.define('Size', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    Size.associate = function(models) {
        Size.hasMany(models.Animal)
    }
    return Size
}
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        role: Sequelize.ENUM('admin', 'member')
    },{
        timestamps: false
    });
    User.associate = function(models) {
        User.hasMany(models.Adoption, {as: 'Adopter', foreignKey: 'AdopterId'});
    };
    return User
}

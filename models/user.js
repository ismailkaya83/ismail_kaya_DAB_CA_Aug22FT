module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FullName: Sequelize.DataTypes.STRING,
        Username: Sequelize.DataTypes.STRING,
        Password: Sequelize.DataTypes.STRING,
        Role: {
            type: Sequelize.DataTypes.STRING,
            values: ['Admin', 'Member'],
            defaultValue: "Member"
        },
    }, {
        timestamps: false
    });
    User.associate = function (models) {
        User.hasMany(models.Animal, {foreignKey: 'UserId'});
    }
    return User
}

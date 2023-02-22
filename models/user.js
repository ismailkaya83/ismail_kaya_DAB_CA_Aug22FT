module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FullName: Sequelize.DataTypes.STRING,
        Username: Sequelize.DataTypes.STRING,
        Password: Sequelize.DataTypes.STRING,
        Role: {
            type: Sequelize.DataTypes.STRING,
            values: ['Admin', 'Member']
        },
    }, {
        timestamps: false
    });

    return User
}

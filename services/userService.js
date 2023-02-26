class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.User = db.User;
        this.Adoption = db.Adoption;
        console.log(db);
    }

    async create(fullName, username, password) {
        return this.User.create(
            {
                FullName: fullName,
                Username: username,
                Password: password,
            }
        )
    }

    async getOneByName(username) {
        return await this.User.findOne({
            where: {username: username}
        });
    }
}

module.exports = UserService;
module.exports = (sequelize, type) => {
    return sequelize.define ('user', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        email: type.STRING,
        avatar: type.STRING,
        password: {
            type: type.STRING,
            allowNull: false
        },
        role_id: type.INTEGER,
        watch: { type: type.BOOLEAN, defaultValue: false }
    })
};
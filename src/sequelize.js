const Sequelize = require( 'sequelize');
const UserModel = require( './models/Users');
const config = require( './config');

const sequelize = new Sequelize(config.pdb.dbname, config.pdb.user, config.pdb.pass, {
    host: config.pdb.host,
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(()=> {
        console.log('database user created')
    });

module.exports = {User, sequelize};
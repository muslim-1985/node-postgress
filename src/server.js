const express = require('express');
const exp = express();
//http server app
const app = require('http').Server(exp);
require('./sequelize');
//web socket server app
//const io = require('socket.io')(app);
//require('./socket/index')(io);
//файл подключения к БД
//const db = require('./db.connect');
//Routes file export
const routes = require('./routes');
//config file required
const config = require('./config');
//const {initPassportAuth} = require('./middlewares/checkAuth');

//static file path
exp.use(express.static(config.app.staticPath));
//  Connect all our routes to our application
exp.use('/', routes);

app.listen(config.app.port, () => {
    console.log('app started muslim bey');
});
//инициализируем авторизацию из подключенного модуля
//initPassportAuth();
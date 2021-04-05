const Sequelize = require('sequelize');
const env = require('./env-db');
const db = {};

const sequelizeDB = new Sequelize(env.database,
    env.username,
    env.password, {
        host: env.host,
        dialect: 'postgres'
    });

db.Sequelize = Sequelize;
db.sequelizeDB = sequelizeDB;

db.vaquinha = require('../api/models/vaquinhaModel').vaquinha(db.sequelizeDB);
db.ajuda = require('../api/models/ajudaModel').ajuda(db.sequelizeDB);
db.conta_usuario = require('../api/models/contausuarioModel').conta_usuario(db.sequelizeDB);
db.historicoresgate = require('../api/models/historicoresgateModel').historicoresgate(db.sequelizeDB);
db.mensagem = require('../api/models/mensagemModel').mensagem(db.sequelizeDB);
db.meusaldo = require('../api/models/meusaldoModel').meusaldo(db.sequelizeDB);
db.usuario = require('../api/models/usuarioModel').usuario(db.sequelizeDB);


/*

ADD as relações

*/

module.exports = db;
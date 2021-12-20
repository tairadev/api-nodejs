const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const database = require('./db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Usuario;


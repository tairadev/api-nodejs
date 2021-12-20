const Sequelize = require('sequelize');
const sequelize = new Sequelize('u842791095_testeapi', 'u842791095_testeapi', '3S*dX8au^bro', {
    host: "sql474.main-hosting.eu",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;

/*
    u842791095_testeapi
    u842791095_taira
    3S*dX8au^bro

    Um eu mando um json com nome e idade fazendo um post e vc salva no banco
    O outro eu faço um get passa do o id e vc me devolve os 2 valores
*/
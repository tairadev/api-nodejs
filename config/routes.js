const express = require('express');
const routes = express.Router();
const sequelize = require('../db')

module.exports = routes;

let db = [
    { '1' : { Nome: "Cliente 1", Idade: '20' } },
    { '2' : { Nome: "Cliente 2", Idade: '30' } },
    { '3' : { Nome: "Cliente 3", Idade: '40' } }
];

//bd
/*sequelize.authenticate().then(function(){
    console.log('Conectado ao bd!');
}).catch(function(erro){
    console.log('Falha ao se conectar: ' + erro);
});*/


routes.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
});

//Buscar dados
routes.get('/usuario/:id', (req, res) => {
    const id = req.params.id;

    //bd
    (async () => {
        const database = require('../db');
        const Usuario = require('../usuario')
        await database.sync();

        //const novoUsuario = await Usuario.create(body);

        //console.log(novoUsuario);

        //TODOS REGISTROS
        //const usuarios = await Usuario.findAll();
        /*const usuarios = await Usuario.findAll({
            where : {
                idade: 15
            }
        });*/

        //BY PK
        const usuarios = await Usuario.findByPk(1);

        return res.json(usuarios);
    })()    
});

//Buscar dados
routes.get('/usuario', (req, res) => {
    const id = req.params.id;
    
    //bd
    (async () => {
        const database = require('../db');
        const Usuario = require('../usuario')
        await database.sync();

        const usuarios = await Usuario.findAll();

        return res.json(usuarios);
    })()    
});

//Inserir dados
routes.post('/add', (req, res) => {
    
    const body = req.body;

    /*if(!body) {
        return res.status(400);
    }*/

    //bd
    (async () => {
        const database = require('../db');
        const Usuario = require('../usuario')
        await database.sync();

        const novoUsuario = await Usuario.create(body);

        //console.log(novoUsuario);

        //TODOS REGISTROS
        //const usuarios = await Usuario.findAll();
        /*const usuarios = await Usuario.findAll({
            where : {
                idade: 15
            }
        });*/

        //BY PK
        //const usuarios = await Usuario.findByPk(1);


        console.log(usuarios)

    })()

    //db.push(body);
    return res.json(body);
});

//Deletar dados
routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id]) {
            return item;
        }
    })

    db = newDB;

    return res.send(newDB);
});
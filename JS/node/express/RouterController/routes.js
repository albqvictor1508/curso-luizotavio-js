const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const cadastroController = require('./controllers/cadastroController');
const contatoController = require('./controllers/contatoController');
console.log(homeController)

route.get('/',homeController.paginaInicial);

route.get('/cadastro', cadastroController.paginaCadastro);

route.get('/contato', contatoController.contato);

route.post('/', cadastroController.trataCadastro);

module.exports = route;
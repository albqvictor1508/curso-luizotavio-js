const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const {loginRequired} = require('./src/middlewares/middlewares');

//rotas da home
routes.get('/', homeController.index);

//rotas de login
routes.get('/login/', loginController.index);
routes.post('/', loginController.register);
routes.post('/login', loginController.login);
routes.get('/logout', loginController.logout);

// rotas de contato

routes.get('/contato/', loginRequired, contatoController.index);
routes.post('/register', contatoController.register); 
routes.get('/contato/index/:id', contatoController.editIndex);

module.exports = routes;

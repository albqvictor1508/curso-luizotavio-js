const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

routes.get('/', homeController.index);

routes.get('/login/', loginController.index);
routes.post('/', loginController.register);
routes.post('/login', loginController.login);

module.exports = routes;

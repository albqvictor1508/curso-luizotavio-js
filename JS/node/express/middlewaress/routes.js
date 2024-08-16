const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const {middlewarePaginaHTML} = require('./src/middlewares/middlewares');

routes.get('/', homeController.homePage);
routes.get('/pagina-html', middlewarePaginaHTML, homeController.paginaHTML);

module.exports = routes;    
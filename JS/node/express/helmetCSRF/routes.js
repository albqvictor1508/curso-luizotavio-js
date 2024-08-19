const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');

routes.get('/', homeController.homepage);
routes.post('/', homeController.form);

module.exports = routes;
require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();
const routes = require('./routes');
const { MeuMiddleware } = require('./src/middlewares/middlewares');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('base de dados conectada');
        app.emit('conectei');
    })
    .catch(e => console.log(e));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(MeuMiddleware);

app.use(routes);

app.on('conectei', () => {
    app.listen(3000, () => {
      console.log('serviço rodando na porta: http://localhost:3000');
    })
})
require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const {middlewareGlobal, checarErroCsrf, csrfMiddleware} = require('./src/middlewares/middlewares');
const session = require('express-session');
const routes = require('./routes');
const helmet = require('helmet');
const csrf = require('csurf');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('base de dados conectada!');
    app.emit('conectado');
})

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(helmet());

const sessionOptions = session({
    secret: 'minha bilola',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    }
})

app.use(sessionOptions);
app.use(flash());

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(csrf());

app.use(middlewareGlobal);
app.use(csrfMiddleware);
app.use(checarErroCsrf);

app.use(routes);

app.on('conectado', () => {
  app.listen(3000, () => {
    console.log('serviço rodando na: http://localhost:3000');
  })
})
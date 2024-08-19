require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');
const { MeuMiddleware, checarErroCSRF, csrfMiddleware} = require('./src/middlewares/middlewares');
const mongoose = require('mongoose');
const helmet = require('helmet');
const CSRF = require('csurf');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('base de dados conectada');
        app.emit('conectei');
    })
    .catch(e => console.log(e));

const sessions = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

const sessionOptions = sessions({
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
app.use(helmet());

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(CSRF());
app.use(MeuMiddleware);
app.use(checarErroCSRF);
app.use(csrfMiddleware);

app.use(routes);

app.on('conectei', () => {
    app.listen(3000, () => {
      console.log('serviço rodando na porta: http://localhost:3000');
    })
})
const express= require('express');
const routes = require('./routes');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
//pro req.body conseguir receber os dados de um formulario post
app.use(routes);
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src' ,'views'));
app.set('view engine', 'ejs');


app.listen(3000, () => console.log('ta rodano no: http://localhost:3000'))
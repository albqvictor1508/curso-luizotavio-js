const express = require('express');
const app = express();
const route = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(route);

app.listen(3000, () => {
    console.log('to rodando no: http://localhost:3000');
})
const express = require('express');
const routes = require('./routes');
const path = require('path');
const {meuMiddleware, middlewareAlert} = require('./src/middlewares/middlewares');
const app = express();

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));
//só vai poder colocar conteúdo estático como js css e imagens com essa linha que permite o uso desses arquivos estáticos
app.use(express.urlencoded({extended: true}));
app.use(middlewareAlert);
app.use(meuMiddleware);
//os middlewares são executados na ordem q é ordenada, então manter todos os outros middles antes do middleware q executa as rotas
app.use(routes);


app.listen(3000, () => {
    console.log('serviço rodando no: http://localhost:3000');
})
const express = require('express');
const app = express();

//CRUD -> CREATE READ UPDATE DELETE
//        POST   GET   PUT   DELETE

app.get('/', (req,res) => {
    res.send(`
        <h1>Seja bem-vindo à porta 3000!</h1>
        <br/>
        acesse a nossa mais nova página: <a href="http://localhost:3000/formulario">Formulario</a>
        `);
    
})

app.get('/formulario', (req,res) => {
    res.send(`
        <form action"/" method="POST">
        Nome: <input type="text" name="inputText"/>
        Idade: <input type="number" name="inputNumber"/>

        <button>Enviar!</button>
        </form>
        `)
})

app.post('/formulario', (req,res) => {
    res.send(`<p>Obrigado por responder, to roubando seus dado</p>`)
})

app.listen(3000, () => {
    console.log('serviço rodando no: http://localhost:3000')
}) 
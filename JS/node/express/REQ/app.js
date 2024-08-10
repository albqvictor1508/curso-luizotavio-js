const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))

app.get('/alexsa', (req,res) => {
    res.send(`
        <h1>EU AMO MINHA MULÉ</h1>

        <p>to aprendendo express (backend node.js) <a href="http://localhost:3000/alexsa/formulario">form</p>
        `)
})

app.get('/',(req,res) => {
    res.send(`
        <h1>Bem vindo a porta 3000</h1>

        <h2>Hoje aprenderemos sobre as requisições no express(req)</h2>

        <p><a href="http://localhost:3000/alexsa">minha princesa</a></p>
        `)
})

app.get('/alexsa/formulario', (req,res) => {
    res.send(`
        <form action="/macaco" method="POST">
            Nome: <input type="text" name="inputName" id="inputName"/>
            Sobrenome: <input type="text" name="inputSobrenome"/>
            Idade: <input type="number" name="inputIdade">
            <button>Enviar</button>
        </form>
        `)
})

app.post('/macaco', (req,res) => {
    res.send(`
        <p>Seu nome: ${req.body.inputName} ${req.body.inputSobrenome}</p>
        <p>(idade: ${req.body.inputIdade})</p>
        `);
        console.log(req.body);
})

app.get('/queries/:nome?/:sobrenome?', (req,res) => {
    res.send(`
        OI
        <p>Nome: ${req.params.nome}</p>
        <p>Sobrenome: ${req.params.sobrenome}</p>

        <form action="/queries_form" method="POST">
            <input type="text" name="inputName"/>
            <input type="text" name="inputRua"/>
            <input type="text" name="inputNumero"/>
            <input type="text" name="inputNumCasa"/>
            <input type="text" name="inputNamorada"/>

            <button>Enviar</button>
        `)

        console.log('req.params(parâmetros da requisição):', req.params)
        console.log('req.query(query strings da requisição):', req.query)
})

app.post('/queries_form', (req,res) => {
    res.send(req.body);
})

app.listen(3000, () => {
    console.log('sendo executado no: http://localhost:3000')
})
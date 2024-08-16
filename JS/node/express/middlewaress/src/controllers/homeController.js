exports.homePage = (req,res) => {
    res.send(`
        <h1>Bem vindo à porta 3000</h1>

        <p>Sou uma rota que está respondendo a sua requisição para acessar essa porta!</p>

        <p>Entre aqui na: <a href="http://localhost:3000/pagina-html">Página HTML</a></p>
        `)
}

exports.paginaHTML = (req,res) => {
    res.render('index');
}
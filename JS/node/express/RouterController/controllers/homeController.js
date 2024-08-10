exports.paginaInicial = (req,res) => {
    res.send(`
        <h1>Seja bem vindo à porta 3000</h1>

        <p>Venha para a: <a href="http://localhost:3000/cadastro">Página de Cadastro</p>
        `);
}
exports.paginaCadastro = (req,res) => {
    res.send(`
        <form action="/" method="POST">
            <p>Nome: <input type="text" name="inputNome"/><p>
            <p>Sobrenome: <input type="text" name="inputSobrenome"/><p>
            <p>Idade: <input type="number" name="inputIdade"/><p>
            
            <button type="submit">Enviar</button>
        </form>
        `)
}

exports.trataCadastro = (req,res) => {
    res.send(`
        <h1>oque foi possível retirar desse formulário</h1>

        <p>Seu nome: ${req.body.inputNome}</p>
        <p>Seu sobrenome: ${req.body.inputSobrenome}</p>
        <p>Seu idade: ${req.body.inputIdade}</p>
        
        `)
}
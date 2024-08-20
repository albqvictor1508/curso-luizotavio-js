exports.index = (req,res) => {
    res.render('login');
}

exports.tratarPost = (req,res) => {
    res.send(req.body);
}

/*
CHECAR EMAIL
CHECAR SENHA
EXIBIR MENSAGEM DE ERRO NO CAMPO QUE ESTIVER INVÁLIDO
MANDAR PRO BANCO DE DADOS QUANDO TODOS ESTIVEREM VÁLIDOS
RETORNAR O USUÁRIO À HOME

*/ 
const Login = require("../models/loginModel");

exports.index = (req,res) => {
    res.render('login');
}

exports.register = async function(req,res) {
  const login = new Login(req.body);
  await login.register();

  if(login.errors.length > 0) {
    req.flash('errors', login.errors);

    req.session.save(function() {
      return res.redirect('http://localhost:3000/login/');
    })
    return    
  };


}


/*
CHECAR EMAIL
CHECAR SENHA
EXIBIR MENSAGEM DE ERRO NO CAMPO QUE ESTIVER INVÁLIDO
MANDAR PRO BANCO DE DADOS QUANDO TODOS ESTIVEREM VÁLIDOS
RETORNAR O USUÁRIO À HOME
*/ 

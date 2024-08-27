const Login = require("../models/loginModel");

exports.index = (req,res) => {
    if(req.session.user) return res.render('logado')
    res.render('login');
}

exports.register = async function(req,res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);

      req.session.save(function() {
        return res.redirect('/login/');
      })
      return    
    };

    req.flash('success', 'Seu usuário foi criado com sucesso');
    req.session.save(function() {
      return res.redirect('/login/');
    })
  
  } catch(e) {
    res.render('erro404');
    console.log(e);
  }

}

exports.login = async function(req,res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
      req.flash('errors', login.errors);

      req.session.save(function() {
        return res.redirect('/login/');
      })
      return    
    };

    req.flash('success', 'Seu login foi realizado com sucesso');

    //salva a sessão do navegador do usuário
    req.session.user = login.user;

    //salva as flash messages na sessão e redireciona o usuário para ele ver as msgs
    req.session.save(function() {
      return res.redirect('/login/');
    })
  
  } catch(e) {
    res.render('erro404');
    console.log(e);
  }
}

exports.logout = (req,res) => {
  req.session.destroy();
  res.redirect('/');
}
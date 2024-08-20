const HomeModel = require('../models/homeModel');

exports.index = (req,res) => {
    //req.session.usuario = {nome: 'victor', sobrenome: 'arruda', logado: true};
    console.log(req.session.usuario);
    res.render('index');
}

const HomeModel = require('../models/homeModel');

exports.homepage = (req,res) => {
    //req.session.meuAmor = {nome: 'lexsa coisa mais linda', idade: 17};
    res.render('home', {
        titulo:'seu bosta',
        pEscondido: 'teu pai dá a bunda',
        numeros: [1,23,19, 2, 7, 9, 11, 15],
    })
    console.log(req.session);
    console.log(req.flash('erro'), req.flash('sucesso'), req.flash('seila'));
    //por conta do 'maxAge' nas configurações da session, essa sessão vai ficar salva por 7 dias mesmo sendo apagada
}

exports.form = (req,res) => {
    res.send(req.body);
}

const HomeModel = require('../models/homeModel');

exports.Homepage = (req,res) => {
    //req.session.usuario = {nome: 'victor', sobrenome: 'arruda', logado: true};
    console.log(req.session.usuario);
    res.render('index');
}

exports.tratarForm = (req,res) => {
    res.send(`
        <p>Seu nome é: ${req.body.nome}, de sobrenome: ${req.body.sobrenome}, e idade ${req.body.idade} anos</p>   
        `)

    HomeModel.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
    }) 
}
const HomeModel = require('../models/homeModel');

HomeModel.create({
    nome: 'vito',
    sobrenome: 'pitoco pimbinha',
    idade: 17,
})

exports.homepage = (req,res) => {
    res.render('home');
}

exports.form = (req,res) => {
    res.send(req.body);

    HomeModel.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
    })
    .then(dados => console.log(dados))
    .catch(e => console.log(e));
}

HomeModel.find()
.then(chaves => console.log(chaves))
.catch(e => 'deu erro na busca ' + e);
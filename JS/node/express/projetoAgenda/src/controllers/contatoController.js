const Contato = require('../models/contatoModel')

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
}

//toda async function retorna uma promisse, entao essa função tb é async para esperar a promisse da async function do model
exports.register = async function(req,res) {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            return req.session.save(() => {
            res.redirect('/contato/');
            })
        }

        req.flash('success', 'Seu contato foi registrado com sucesso!');
        return req.session.save(() => {
            res.redirect('/contato/');
        })
    } catch(e) {
        console.log(e);
        res.render('404');
    }
}

exports.editIndex = async function(req,res) {
    if(!req.params.id) return res.render('404');

    const contato = await Contato.buscaID(req.params.id);

    res.render('contato', {contato});
}
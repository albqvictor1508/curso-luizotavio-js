const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    email: {type: String, required: false, default: ''},
    telefone: {type: String, required: false, default: ''},
    dataCriacao: {type: Date, default: Date.now},
});

const ContatoModel = mongoose.model('home', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function() {
    this.valida();

    if(this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function() {
    this.cleanUp();
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('O campo "nome" é obrigatório');
    if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos uma dos contatos precisa ser enviado: email ou telefone');

}

Contato.prototype.cleanUp = function() {
    //for para iterar dentro de objeto (nesse caso pode usar for in e for normal, mas o for of nao)
    for(const chave in this.body) {
        if(typeof this.body[chave] !== 'string') this.body[chave] = '';
    }
    
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        sobrenome: this.body.telefone,
        sobrenome: this.body.email,
    }
}

module.exports = Contato;


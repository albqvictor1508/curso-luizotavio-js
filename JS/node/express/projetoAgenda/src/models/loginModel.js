const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
})

const loginModel = mongoose.model('login', loginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if(this.errors.length > 0) return;

        try {
            const salt = bcryptjs.genSaltSync();
            this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

            this.user = await loginModel.create(this.body);
        } catch(e) {
            console.log(this.errors, e);
        }
    }

    valida() {
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.body.senha.length < 3 || this.body.senha.length > 50) {
            this.errors.push('A senha precisa estar entre 3 e 50 caracteres');
        }
    }

    cleanUp() {
        //for para iterar dentro de objeto
        for(const chave in this.body) {
            if(typeof this.body[chave] !== 'string') this.body[chave] = '';
        }
        
        this.body = {
            email: this.body.email,
            senha: this.body.senha,
        }
    }
}

module.exports = Login;
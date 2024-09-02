const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const loginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true},
})

const loginModel = mongoose.model('login', loginSchema);

class Login {
    constructor(body) {
    //esse body é o req.body, que armazena os dados que foram enviados pro POST com o nome q é posto no name do input
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async usuarioExiste() {
        //this.body.email = email mandado pelo usuário
        this.user = await loginModel.findOne({email: this.body.email});
        
        if(this.user) this.errors.push('Usuário já existe');
    }

    async login() {
        this.valida();
        if(this.errors.length > 0) return;

        this.user = await loginModel.findOne({email: this.body.email});
        
        if(!this.user) {
            this.errors.push('O usuário não existe');
            return;
        }

        //compara o hash da senha que foi enviada com o hash que foi salvo na base de dados
        if(!bcryptjs.compareSync(this.body.senha, this.user.senha)) {
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }

        if(this.errors.length > 0) return;

    }

    async register() {
        this.valida();
        if(this.errors.length > 0) return;

        await this.usuarioExiste();

        if(this.errors.length > 0) return;

        //hash de senha 
        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

        //mudando o valor de user pro objeto com os dados validados e enviando pro mongo
        this.user = await loginModel.create(this.body);
    }

    valida() {
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');

        if(this.body.senha.length < 3 || this.body.senha.length > 50) {
            this.errors.push('A senha precisa estar entre 3 e 50 caracteres');
        }
    }

    cleanUp() {
        //for para iterar dentro de objeto (nesse caso pode usar for in e for normal, mas o for of nao)
        for(const chave in this.body) {
            if(typeof this.body[chave] !== 'string') this.body[chave] = '';
        }
        
        this.body = {
            email: this.body.email,
            senha: this.body.senha,
        }
    }
}

//TUDO Q MEXE COM O BANCO DE DADOS DIRETAMENTE RETORNA UMA PROMISSE, OU SEJA, É ASSINCRONO

module.exports = Login;
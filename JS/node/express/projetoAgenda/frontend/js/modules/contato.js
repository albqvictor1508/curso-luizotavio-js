import validator from "validator";

export default class Contato {
    constructor(classeForm) {
        this.form = document.querySelector(classeForm);
    }

    init() {
        console.log("ta sendo executado");
        this.events();
    }

    events() {
        if(!this.form) {
            console.log("nao tem evento");
            return;
        }
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            this.declaraCampos(e);
        })
    }

    declaraCampos(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        const emailInput = el.querySelector('input[name="email"]');
        
        if(!this.valida({nome: nomeInput.value, sobrenome: sobrenomeInput.value, tel: telefoneInput.value, email: emailInput.value})) el.submit();
    }

    valida(campos) {
        let errors = false;

        if(!campos.nome) {
            alert("O nome é obrigatório");
            errors = true;
        }

        if(!campos.tel && !campos.email) {
            alert("É preciso dois meios de contato: telefone ou email");
            errors = true;
        }
        
        if(campos.email && !validator.isEmail(campos.email)) {
            alert("Email inválido");
            errors = true;
        }
        
        return errors;
    }
}
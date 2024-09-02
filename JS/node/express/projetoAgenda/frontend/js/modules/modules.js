import validator from "validator";

export default class Login {
    constructor(classeForm) {
        this.form = document.querySelector(classeForm);
    }

    init() {
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.captarElementos(e);
        })
    }

    captarElementos(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const senhaInput = el.querySelector('input[name="senha"]');
        if(!this.valida({email: emailInput.value, senha: senhaInput.value})) el.submit();
    }

    valida(elementos) {
        let errors = false;

        if(!validator.isEmail(elementos.email)) {
            alert("email inválido");
            errors = true;
        }

        if(elementos.senha.length < 3 || elementos.senha.length > 50) {
            alert("senha precisa estar entre 3 a 50 caracteres");
            errors = true;
        }

        if(!elementos.senha || !elementos.email) {
            alert('Preencha todos os campos');
            errors = true;
        }

        return errors;
    }
}

const teste = new Login('testando');

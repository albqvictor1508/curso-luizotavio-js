class ValidaForm {
    constructor() {
        this.form = document.querySelector('.formulario');

        this.formEventos();
    }

    formEventos() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const campos = this.validaCampos();
        const senhas = this.validaSenha();

        if(campos && senhas) {
            alert('form enviado!!!!')
            this.form.submit();
        }
    }

    validaCampos() {
        let valida = true;

        for(let errorText of this.form.querySelectorAll('.texto-erro')) {
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.msgErro(campo, `${label} não pode estar vazio`);
                valida = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validarCPF(campo)) {
                    this.msgErro(campo, `CPF inválido`);
                    valida = false; 
                }
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validarUsuario(campo)) valida = false;
            }

        }
        return valida;
    }

    msgErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('texto-erro');
        campo.insertAdjacentElement('afterend', div);
    }

    validarCPF(campo) {
        const cpf = new CPF(campo.value);

        if(!cpf.validadorCPF) return false;

        return true;
    }

    validarUsuario(campo) {
        let valida = true
        const usuario = campo.value;

        if(usuario.length < 3|| usuario.length > 12) {
            this.msgErro(campo, `Usuário deve conter entre 3 a 12 caracteres`);
            valida = false;
        } 

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.msgErro(campo, `Usuário deve conter apenas letras e/ou números`);
            valida = false;
        }

        return valida;
    }

    validaSenha() {
        let valida = true
        const senha = document.querySelector('.senha');
        const repetirSenha = document.querySelector('.repetir-senha');

        if(senha.value.length < 6|| senha.value.length > 12) {
            this.msgErro(senha, `Senha deve conter entre 6 a 12 caracteres`);
            valida = false;
        }

        if(senha.value !== repetirSenha.value) {
            this.msgErro(senha,`Senha e Repetir Senha devem ser iguais`);
            this.msgErro(repetirSenha,`Senha e Repetir Senha devem ser iguais`);
            
        }

        return valida;
    }
}

const valida = new ValidaForm();


class CPF {
    constructor(cpf) {
        this.cpf = cpf;
        this.cpfLimpo = this.cpf.replace(/\D+/g, '');
    }
    
   geraCPF() {
        const CPF9digitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigitos(CPF9digitos)
        const digito2 = this.geraDigitos(CPF9digitos + digito1);

        this.novoCpf = CPF9digitos + digito1 + digito2;
        return this.novoCpf === this.cpfLimpo;
    }
    
    geraDigitos(cpf) {
        let mult = cpf.length + 1;
        const arrayCPF = Array.from(cpf);
        const digito = arrayCPF.reduce((ac,valor) => {
            ac += Number(valor) * mult;
            mult--
            return ac;
        }, 0)
        
        const calculo = 11 - (digito % 11);
        return calculo > 9? '0': String(calculo);
    }
    
    get validadorCPF() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(typeof this.cpfLimpo !== 'string') return false;

        if(!this.geraCPF()) return false;

        return true
    }
}
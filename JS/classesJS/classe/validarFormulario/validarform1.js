/* 
Um evento de submit para fazer um for querySelectorAll e um for que pegam todos os campos dentro do form.

Fazer uma checagem para que se algum dos campos estiver vazio, o formulario não vai ser enviado.

fazer uma função que cria uma mensagem de erro, coloca uma classe nela e a exibe no HTML.

captar os campos por classe e fazer a checagem 

criar uma variável booleana com 'true' e a alterar para false em cada checagem, se passar por todas essa variável é retornada

Usar alguns métodos para posicionar a div no lugar correto.

criar uma instância da classe CPF e mandar uma mensagem de erro caso seja inválido

Validar o tanto de caracteres o usuário e a senha podem ter 

Validar se a senha e a senha repetida são iguais

Se a função que valida a senha e a função que valida os outros campos forem positivas, envia o formulário
*/

class ValidaForm {
        constructor() {
            this.form = document.querySelector('.formulario');
            this.formEventos()
        }

        formEventos() {
            //arrow function pra manter o this do objeto e n passar pra função
            this.form.addEventListener('submit', e => {
                this.handleSubmit(e);
            })
        }

        handleSubmit(e) {
            e.preventDefault();
            this.validaCampos();

            if(this.validaCampos && this.validaSenha) {
                this.form.submit();
            }
        }

        validaCampos() {
            let valida = true;

            for(let msgErro of this.form.querySelectorAll('.texto-erro')) {
                msgErro.remove();
            }
            

            for(let campo of this.form.querySelectorAll('.validar')) {
                const label = campo.previousElementSibling.innerText;
                if(!campo.value) {
                    this.msgDeErro(campo, `${label} não pode ficar vazio`);
                    valida = false
                }

                //selecionando o campo que tem a classe cpf
                if(campo.classList.contains('cpf')) {
                //enviando o vampo como parâmetro pra pegar o valor dele dentro da validaCPF
                    if(!this.validaCPF(campo)) return valida = false;
                }

                if(campo.classList.contains('usuario')) {
                    if(!this.ValidaUsuario(campo))return valida = false;
                }

                
            }

        }

        validaCPF(campo) {
            const cpf = new CPF(campo.value);

            if(!cpf.validadorCPF) {
                this.msgDeErro(campo, `CPF Inválido`);
                return false;
            }
            return true;
        }

        ValidaUsuario(campo) {
            const valor = campo.value;

            if(valor.length < 3|| valor.length > 12) {
                this.msgDeErro(campo, `Usuário precisa ter entre 3 a 12 caracteres`);
                return false
            }

            return true
        }

        validaSenha(campo) {
            const valorSenha = this.form.querySelector('.senha');
            const valorRepetirSenha = this.form.querySelector('.repetir-senha');

            if(valorSenha.length > 6||valorSenha.length < 12) {
                this.msgDeErro(campo, `Senha deve conter entre 6 a 12 caracteres`);
                return false;
            }
            if(valorSenha !== valorRepetirSenha) {
                this.msgDeErro(campo, `Senha e Repetir Senha devem ser iguais`);
                return false
            }
            return true;
        }

        msgDeErro(campo, msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('texto-erro')
            campo.insertAdjacentElement('afterend', div);
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

/* 
Preciso de lógica para juntar o cpf do formulario, e de lógica para pegar todos os valores quando o formulário der submit.
*/
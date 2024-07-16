/* 
Nenhum campo vazio
Letras ou numeros
Senha entre 6 a 12 caracteres
*/

function criaClasse() {
    class Formulario {
        constructor(nome, sobrenome, cpf, usuário, senha, repetirSenha) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.cpf = cpf;
            this.usuario = usuário;
            this.senha = senha;
            this.repetirSenha = repetirSenha;
        }

        validaForm() {
            if(this.senha !== this.repetirSenha) return false;
            if(!this.nome||!this.cpf||!this.sobrenome||!this.usuario||!this.senha) return false;
            if(this.senha.length < 6||this.senha.length > 12) return false;
            if(this.usuario.length < 3|| this.usuario.length > 12) return false;
        }
    }




    class CPF extends Formulario {
        constructor(cpf) {
            super(cpf);
            this.cpfLimpo = cpf.replace(/\D+/g, '');
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

        get validaCPF() {
            if(!this.cpfLimpo) return false;
            if(this.cpfLimpo.length !== 11) return false;
            if(typeof this.cpfLimpo !== 'string') return false;

            if(this.geraCPF()) return `CPF válido`;

            return `CPF inválido`
        }
    }
    
    const cpf = new CPF('136.063.084-85');
    console.log(cpf.validaCPF)
}
criaClasse();
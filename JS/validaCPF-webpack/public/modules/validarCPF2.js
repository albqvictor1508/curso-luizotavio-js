export default class CPF {
    constructor(cpfEnviado) {
        this.cpfLimpo = cpfEnviado.replace(/\D+/g, '');
        this.novoCpf = '';
    }

    isSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    gerarCPF() {
        const CPF9Digitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.gerarDigitos(CPF9Digitos);
        const digito2 = this.gerarDigitos(CPF9Digitos + digito1);
        this.novoCpf = CPF9Digitos + digito1 + digito2;
        return this.novoCpf === this.cpfLimpo;
    }

    static gerarDigitos(cpf) {
        let total = 0
        let mult = cpf.length + 1;

        for(let stringCpf of cpf) {
            total += mult * Number(stringCpf);
            mult--
        }

        const calculo = 11 - (total % 11);
        return calculo > 9? '0': String(calculo);
    }

    get validar() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.gerarCPF();
        const validacao = this.novoCpf === this.cpfLimpo;
        if(validacao) {
            return `CPF válido` 
        }
        return `CPF inválido`;
    }
}

let cpf = new CPF('007.945.324-46');
//cpf = new CPF('222.222.222-22')
console.log(cpf.validar)

/*
validação de CPF: 

Se o cpf não for uma string, é inválido;
Se o cpf tiver mais ou menos de 11 caractéres, é inválido;

calculo de CPF:

retira os ultimos 2 digitos e multiplica o resto por um valor decrescente que começa no total de números + 1, ou seja, 9 + 1 === 10, e vai até o 2, depois o resultado dessa multiplicação é dividido por 11 e o resto dessa divisão vai ser o primeiro digito (se o valor for maior que 9, esse valor vira 0), já para calcular o segundo dígito, o total é os 9 dígitos + o primeiro digito, então é 10 + 1 === 11, e repete o processo, depois junta os números novamente, e se der a mesma coisa doq foi enviado, o cpf é válido

0 0 7 9 4 5 3 2 4

*/
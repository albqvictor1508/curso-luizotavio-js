import validaCPF from "../modules/validarCPF2";

class geraCPF {

    aleatorio(min=100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatar(cpf) {
        cpf.slice(0,3) + '.' +
        cpf.slice(3,6) + '.' + 
        cpf.slice(6,9) + '-' +
        cpf.slice(9,11);
    }

    Sequencia() {
        const cpf = this.aleatorio();
        return cpf[0].repeat(cpf.length) === cpf
    }

    cpfAleatorio() {
        const cpf = this.aleatorio();
        const digito1 = validaCPF.gerarDigitos(cpf);
        const digito2 = validaCPF.gerarDigitos(cpf + digito1);

        const novoCpf = cpf + digito1 + digito2;

        if(this.Sequencia()) return false;
        
        return this.formatar(novoCpf);
    }


}

export {geraCPF}
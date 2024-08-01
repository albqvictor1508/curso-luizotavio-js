import validaCPF from "../modules/validarCPF2";

class geraCPF {

    aleatorio(min=100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    verificar() {
        const cpf = this.aleatorio();

        function Sequencia() {
            const checagem = cpf[0].repeat(9) === cpf;

            if(checagem) return false;
            return true;
        }

        if(Sequencia()) {
            return cpf;
        }
    }

    formatar(cpf) {
        cpf.slice(0,3) + '.' +
        cpf.slice(3,6) + '.' + 
        cpf.slice(6,9) + '-' +
        cpf.slice(9,11);

        return cpf;
    }

    cpfAleatorio() {
        const cpf = this.verificar();
        const digito1 = validaCPF.gerarDigitos(cpf);
        const digito2 = validaCPF.gerarDigitos(cpf + digito1);

        const novoCpf = cpf + digito1 + digito2;


        return this.formatar(novoCpf);
    }


}

export {geraCPF}
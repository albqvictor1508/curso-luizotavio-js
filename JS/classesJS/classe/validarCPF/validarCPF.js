class ValidadorCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            get: function() {
                return cpfEnviado.replace(/\D+/g, '');
            },
            configurable: false,
            enumerable: true,
        })
    }

    geraCPF() {
        const CPFSemDoisUltimosDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 =ValidadorCPF.geraDigitos(CPFSemDoisUltimosDigitos);
        const digito2 = ValidadorCPF.geraDigitos(CPFSemDoisUltimosDigitos + digito1);
        this.CpfChecado = CPFSemDoisUltimosDigitos + digito1 + digito2;
    }

    static geraDigitos(cpf) {
        let total = 0;
        let mult = cpf.length + 1;

        for (let valor of cpf) {
            total += mult * Number(valor);
            mult--;
        }
        
        const calculo = 11 - (total % 11);
        return calculo > 9? 0 : String(calculo);
    }

    IsSequencia() {
        this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
        //repeat vai repetir 11 vezes o primeiro caracter da sequência.
    }

    get validador() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.IsSequencia()) return false;
        this.geraCPF();

        return this.CpfChecado == this.cpfLimpo;
    }

}

const cpf = new ValidadorCPF('136.063.084-85');
console.log(cpf.validador);

//REVER AULA E SE POSSIVEL RECRIAR ISSO AQUI
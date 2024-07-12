function ValidaCPF(cpf) {
    Object.defineProperty(this,'limparCPF', {
//não pode colocar 'writable' quando se tem um getter
        get: function() {
            return cpf.replace(/\D+/g, '');
        },
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.limparCPF === 'undefined') return false;
    if(this.limparCPF.length !== 11) return false;

    const Cpf9digitos = this.limparCPF.slice(0,-2);
    const parteCPF = Array.from(Cpf9digitos);
    this.calculaCPF(parteCPF);
    return true;
}

ValidaCPF.prototype.calculaCPF = function(cpfParcial) {
    console.log(String(cpfParcial));
    function calculoDigitos() {
        let total = 0;
        let mult = cpfParcial.length + 1;
        const calculo = cpfParcial.reduce((ac,valor) => {
            ac += (valor * mult);
            mult--;
        })
        console.log(calculo);
        return total;
    }

    function verificarDigitos(digitos) {
        const total = calculoDigitos(digitos);
        let digito = 11 - (total % 11);
        return digito > 9? 0 : digito;
    //lembrar de usar ternária 
    }
    const digito1 = verificarDigitos(10);
    const digito2 = verificarDigitos(11);
    console.log(digito1,digito2);

}

const criaCPF = () => {
    const cpf = new ValidaCPF('007.945.324-46');
    cpf.valida();
}
criaCPF();

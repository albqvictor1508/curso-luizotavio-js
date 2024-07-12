function ValidaCPF(cpf) {
    Object.defineProperty(this, 'limparCPF', {
        enumerable: true,
        get: function() {
            cpf.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof limparCPF === 'undefined') return false;
    if(this.limparCPF.length !== 11) return false;
    if(this.VerificarSequência()) return false;
    
    const cpfParcial = this.limparCPF.slice(0,-2);
    const digito1 = this.calcularCPF(cpfParcial);
    const digito2 = this.calcularCPF(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === cpfParcial;
}

ValidaCPF.prototype.calcularCPF = function(arraycpf) {
    const ArrayCPF = Array.from(arraycpf);

    let mult = ArrayCPF.length - 1;
    const calculo = ArrayCPF.reduce((ac,valor) => {
        ac += (Number(valor) * mult);
        return ac;
    }, 0);
//tive problema com essa conta pq os valores n batia.
    const digito = 11 - (calculo % 11);
    return digito > 9? '0': String(digito);
}

ValidaCPF.prototype.VerificarSequência = function() {
    const sequencia = this.limparCPF[0].repeat(this.limparCPF.length);
    return sequencia === this.limparCPF;
}

const criaCPF = () => {
    const cpf = new ValidaCPF('136.063.084-85');
    cpf.valida();

    if(cpf.valida()) console.log('CPF Válido!');
    if(!cpf.valida()) console.log('CPF Inválido!');
}
criaCPF();
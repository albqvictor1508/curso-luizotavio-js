//fazer uma conta bancária e fazer ela ser poupança ou corrente
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

    //tem q ser colocado aqui para o getter pegar    
}

Conta.prototype.sacar = function(saque) {
    if(saque > this.saldo) return `Quantidade insuficiente!`;
    this.saldo -= saque
    return this.verSaldo();
}

Conta.prototype.depositar = function(deposito) {
    this.saldo += deposito
    return this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    return `Ag/c : ${this.agencia} / ${this.conta} | Saldo atual: R$ ${this.saldo.toFixed(2)}!`
}


function InstanciaConta() {
    const conta = new Conta('roxinha', '2508', 400);
    console.log(conta.sacar(100));
    console.log(conta.depositar(300));
    console.log(conta.verSaldo);
}




function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


//Reescrevi pra mudar a condição, mudando seu comportamento na função filha, ou seja, poliformismo

ContaCorrente.prototype.sacar = function(saque) {
    if(saque > (this.saldo + this.limite)) return `Passou do limite: R$ ${this.limite.toFixed(2)}`;

    this.saldo -= saque
    return this.verSaldo();
}


function InstanciaContaCorrente() {
    const cc = new ContaCorrente('laranjinha', '8',10000, 100);
    cc.depositar(100);
    console.log(cc.sacar(100))
}
InstanciaContaCorrente();
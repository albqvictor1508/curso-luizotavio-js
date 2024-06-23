const pessoa = {
    nome: 'alexsa',
    sobrenome: 'martins dos santos',
    idade: 18,
}

function exibePessoa() {
    console.log(pessoa);
}
//exibePessoa();

//Escopo léxico consiste na função conseguir usar de outros elementos que estão fora do seu bloco(escopo), ou seja, variáveis, constantes, entre outros

function criaFala() {
    const fala = 'Fala criada';
    return fala

}

function exibeFala() {
    criaFala();
}
exibeFala();

//como na função 'criaFala' possui um console.log, só isso já exibiria a fala, mas se n houvesse, teria q ser feito dessa forma:

function exibeFala2(fala) {
    fala = criaFala();
    console.log(fala);
    console.log(pessoa);
    
}
exibeFala2();

//mesmo que uma função não consiga acessar o escopo(bloco) da outra, elas sabem doque está a sua volta, então uma função sabe doque acontece a sua volta, principalmente no escopo global, como é caso da constante 'pessoa'.

function Redeclarar() {
    const pessoa = 'luiz inácio lula da silva';
    console.log(pessoa);
//Dessa forma, dentro desse bloco(escopo), a constante pessoa é redeclarada e tem um valor totalmente diferente(mas somente nesse escopo)
}
Redeclarar();

const exibePessoa2 = () => {
    const pessoa = 'jair bolsonaro';
    exibePessoa();
//mesmo que a constante pessoa tenha outro valor nesse bloco, o valor será pego da função que está sendo chamada
}
exibePessoa2();

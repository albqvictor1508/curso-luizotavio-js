const pegarDepoimento = depoimento => console.log(`função pegarDepoimento: ${depoimento}`);//não é hoisting

const obj = {
    nome: 'alexsa',
    sobrenome: 'martins',
    idade: 18,
    depoimento(valor) {
        console.log('meu depoimento é q eu amo meu namorado!');
        pegarDepoimento(valor)
        return console.log(valor);
    }
}
obj.depoimento('honda civic');//função hoisting

const soma = (n1,n2) => n1 + n2;//recebe dois parâmetros e soma eles 
console.log('\n');
function Argumentos() {
    //console.log(arguments)
}

Argumentos('tio cuca beludo', 'pelé 2002', 'maradona cheiradasso');

//LEMBRANDO QUE ISSO SÓ É POSSIVEL EM FUNÇÕES QUE SÃO CRIADAS COM 'FUNCTION'.

function somar(a, b = 10) {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos
    //a cada argumento que for iterado no for, vai ser somado com a variável 'total'
    }
    console.log(total, a, b);
    return console.log(a + b);
    
//se o argumento for null, será considerado 0, se for undefined, será considerado o padrão que foi setado, se for uma string vazia, vai concatenar
}

somar(1 , undefined, 3, 4, 55, 22);

function desestruturar({nome, idade}) {
    console.log(nome, idade)
}

let obegeto = {
    amor: 'alexsa martins',
    nome: 'victor',
    idade: 18,
    sobrenome: 'albuquerque',
    namorada: 'alexsa'
}

desestruturar(obegeto);
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

testeHoisting();

function testeHoisting() {
    console.log('sou hoisting');
}
//testeHoisting2();

const testeHoisting2 = () => {
    console.log('arrow function: sou hoisting');
//não é hoisting.
}
testeHoisting3();

const testeHoisting3 = function() {
    console.log('function express: eu sou um hoisting');
//não é hoisting.
}


obj.depoimento('honda civic');//não é hoisting

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

function desestruturar([valor1,valor2,valor3,valor4]) {
    console.log(valor1, valor2,valor3, valor4)
}

const array = [1508, 2024, 'são joão','victor', 18, 'macaco', 'amo alexsa', 1, 2 , 3, 20, 45];
//É desestruturado pelo valor que estiver na sequência.

let obegeto = {
    amor: 'alexsa martins',
    nome: 'victor',
    idade: 18,
    sobrenome: 'albuquerque',
    namorada: 'alexsa'
}
//É desestruturado pela chave

desestruturar(array);

//USANDO O OPERADOR REST PARA PEGAR MAIS PARâMETROS.

function rest(p1, p2, ...parametro) {
    console.log(p1, p2, parametro);
//p1 e p2 recebem dois argumentos e parametro vira um array com oq sobrou 
}

function calculadora(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    return acumulador;
}
rest(12,24,56,100,200,224,300,24);

console.log(calculadora('+', 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10));


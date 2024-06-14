let cont = 1;
const array = [];

/*
const meuAmor = {
    nome: 'Alexsa',
    sobrenome: 'Martins',
    idade: 16,
    tamanho: '1.68m',
    cabelo: 'preto liso',
}
*/
function NumeroAleatorio(minimo, maximo) {
    const random = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(random);
}
const min = 1;
const max = 50;
let numero = NumeroAleatorio(min,max);

//o while indica que enquanto a condição que afirma que o número não pode ser igual 25 for falsa, os numeros aleatórios continuarão a ser gerados.

while (numero !== 25) {
    numero = NumeroAleatorio(min,max);
    console.log(numero);

    
}

//Fórmula do MDN para pegar um número aleatório utilizando Math.random para trazer um numero aleatório e math.floor para arredondar esse numero pra baixo.



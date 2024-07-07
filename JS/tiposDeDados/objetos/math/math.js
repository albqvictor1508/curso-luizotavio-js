let array = [1, 2, 3, 4, 10, 20, 21, 30, 32, 45, 56];
let maior = array[0];
let metade = array.length / 2
let menor = array[0];

for (let comida = 0; comida < array.length; comida++) {

    if (maior > array[comida]) {
        maior = array[comida]

    }
}
console.log(maior, 'eu amo alexsa')

//console.log(Math.max(1, 2, 3, 4, 10, 20, 21, 30, 32, 45, 56, 2508))

array = [Math.max(1, 2, 3, 4, 10, 20, 21, 30, 32, 45, 56, 2508)]

//console.log(array)

// uma forma de pegar o maior numero do array sem usar condicionais

let aleatorio = Math.round(Math.random() * (10 - 1) + 1)
console.log(aleatorio)

//random para gerar um número aleatório e round para arredondar e deixá-lo sem casas decimais

let n1 = 10;
let n2 = 20;
let n3 = 30;
let n4 = 40;
let n5 = 50;

array = [Math.max(n1, n2 ,n3, n4, n5)]

console.log(array)



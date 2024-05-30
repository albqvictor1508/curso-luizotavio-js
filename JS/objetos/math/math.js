let array = [1, 2, 3, 4, 10, 20, 21, 30, 32, 45, 56];
let maior = array[0];
let metade = array.length / 2
let menor = array[0];

for (let comida = 0; comida < array; comida++) {

    if (menor > array[comida]) {
        menor = array[comida]

    }
}
console.log(menor, 'eu amo alexsa')

console.log(metade)

console.log('\ntotal:',array.length)
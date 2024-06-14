console.log('Em um array:\n')

const array = ['alexsa', 'martins', 'dos', 'santos'];

for (let cont in array) {
    console.log(cont,array[cont]);
}
//Exibindo o valor da variavel criada na repetição para exclarecer mais

//O contador navega pelos indices do array, e o comando 'array[cont]' exibe o dado que foi posto naquele indice

const carro = {
    motor: 'V8',
    bancos: 'couro francês',
    marcha: 'manual',
    preço: 120.000,
    }
    console.log('Em um objeto:\n')

for (let contador in carro) {
    console.log(`${contador}: ${carro[contador]}`);
    }

const moto = {
    nome: 'start',
    aro: 'n sei',
    motor: 'de 160',
    garupa: 'minha namorada alexsa martins dos santos',
}
for (let x in moto) {
    console.log(moto[x])
}


//Exibindo o valor da variavel criada na repetição para exclarecer mais

//Diferente do array, o contador percorre pelas chaves, e o comando 'carro[contador] exibe o dado que está armazenado naquela chave'
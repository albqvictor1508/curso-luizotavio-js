let alexsa = "O amor da minha vida"

console.log(alexsa.search('O'))

console.log(alexsa.replace('O', 'A'))

console.log(alexsa.search(/O/, /o/g))

console.log(alexsa.replace('amor', 'vida'))

console.log(alexsa.length)

console.log(alexsa.charAt())

console.log(alexsa.slice(0,10))

console.log(alexsa.substring(alexsa.length - 1))

console.log(alexsa.split(' ', 4));

console.log(alexsa.toUpperCase());

console.log(alexsa.toLowerCase());

//lembrar de revisar os métodos nesse arquivo js 


//split (separará a string no que foi determinado e jogará em um array, e o segundo valor é o tanto de vezes que vai ser separado)

//os espaços também possuem índices

//em números negativos tiram o numero determinado do total de indices e exibe o caracter q possui esse indice e pega do restante até o numero determinado (se não for determinado vai até o final da string)

//alexsa.slice(-6,-3) indicando o inicio e o final do slice 



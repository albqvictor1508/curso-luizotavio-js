const obj = {
    nome: 'alexsa',
    idade: 16,
    sexo: '5 vezes no mês',
    endereço: {
        bairro: 'Mané Goiana',
        rua: 'não sei',
        numeroDaCasa: 'também n sei',
    }
};

//const {nome = 'não existe', idade, sexo} = obj;

console.log({nome, idade, sexo})

//Formas de pegar o objeto endereço.
const {endereço} = obj;
//armazenei o objeto que estava na chave 'endereço' dentro da variável chamada de 'endereço'.

const {rua} = endereço;
//armazenei o dado que estava na chave 'rua' dentro do objeto

//console.log('\n',{endereço, rua})


//Mas isso pode ser feito de outra forma

const {endereço: {numeroDaCasa}} = obj;
//console.log(numeroDaCasa)

//Pegando a chave do objeto e alterando o dado

const {nome: n = 'vito', idadee} = obj;






//criei as 3 variáveis dentro de um objeto para que busquem sua chave e seu valor, e exibi esse objeto no console.log

//Mas também poderia exibir as variáveis fora de um objeto, ou em um array, ou até utilizá-las em outra coisa 

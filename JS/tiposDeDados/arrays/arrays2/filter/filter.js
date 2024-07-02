function criaArray() {
    const numeros = [9,88,50,39,4,2,5];
    return numeros;
}

function maiorQue10() {
    numeros = criaArray();
    let maiorQue10 = 0;
    for(let valores of numeros) {
        if(valores > 10) {
            console.log(valores)
        }
        console.log(maiorQue10);
    }
}
maiorQue10();

const ArrayCallback = (valor, indice, array) => {
//a sequencia de parâmetros funciona igual ao forEach.

//função de callback que retorna booleano, pois o filter pede que a função passada por referência retorne booleano
    return valor > 10;
} 

const numbers = criaArray();
const filtragem = numbers.filter(ArrayCallback);
//passando a função que indicará oque o filtro vai filtrar
console.log(filtragem);

const array = ['victor', 20, 32, 88, 1, 'ama', 19, 1508, 'alexsa'];

const filtragem2 = array.filter(valor => !Number(valor));

console.log(filtragem2);

function CriaObjeto() {
    const pessoas = [
        {nome: 'victor', idade: 17},
        {nome: 'alexsa', idade: 16},
        {nome: 'joseana', idade: 51},
        {nome: 'joao', idade: 7},
    ]
    return pessoas;
}

function filtragemm() {
    console.log('\n')
    const pessoas = CriaObjeto();
    const pessoasNome = pessoas.filter(valor => valor.nome.length > 5);
    const pessoas50Anos = pessoas.filter(valor => valor.idade > 50);
    const pessoasFinalA = pessoas.filter(valor => valor.nome.endsWith('a'));
//endsWith => termina com 
    console.log(pessoasFinalA);
    return
}
filtragemm();


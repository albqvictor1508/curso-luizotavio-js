function criaObjeto(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
//transforma o argumento enviado em um objeto
}

const alexsa = criaObjeto('alexsa' , 'martins dos santos', 16);
console.log(alexsa);

//OBJETO CRIADO E EXIBIDO NA TELA 

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto;
}

//ficou ate verde para facilitar o entendimento, essa constante recebeu a função 'falaResto'
const frase = falaFrase('Bom');
const resto = frase('dia!');
// e essa constante passou um argumento para a função 'falaResto' dentro de 'frase', que se juntou com o argumento passado em 'frase' e exibiu o texto completo

//poderia haver outras funções dentro

console.log(resto);

function criaMultiplicador(mult) {
    function multiplicacao(num) {
        return num * mult
    }
    return multiplicacao;
}

const mult = criaMultiplicador(2);
const numero = mult(20);
console.log(numero);
//Mesmo funcionamento das funções anteriores

function CriaSomador(som) {

//também pode ser feita uma função sem nome que vai pegar do mesmo jeito
    return function soma(n) {
        return n + som;
    }
}
const numeroSomador = CriaSomador(10);
const number = numeroSomador(5);
console.log(number);
//Ainda no mesmo funcionamento das outras funções, só mudou a forma como foi escrita
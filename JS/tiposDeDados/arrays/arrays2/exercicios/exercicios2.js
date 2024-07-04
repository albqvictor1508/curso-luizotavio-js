function criaArray() {
    const numeros = [1,2,5,80,35,7,77,97,3,24,99,100,201,203,220];
    return numeros;
}

function paresArray() {
    const array = criaArray();
    const pares = array.filter(valor => valor % 2 === 0);
    dobrarPares(pares);
    return pares;
}
paresArray();

function dobrarPares(pares) {
    const dobrarPares = pares.map(valor => valor * 2);
    somarPares(dobrarPares, pares);
    return dobrarPares
}


function somarPares(map, filter) {
    const total = map.reduce((soma, valor) => soma += valor);
    exibirTudo(filter, map, total);
}

function exibirTudo(filter, map, reduce) {
    console.log(filter, map, reduce);
}

function MisturarTudo() {
    const array = criaArray();
    const mistura = array.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((soma,valor)=> soma += valor);
    console.log(mistura);
}
MisturarTudo();
const calculo = function(x, y) {

    return x + y
};

//console.log(calculo(10, 20));

//console.log(calculo('victor', ' e alexsa'))

const raiz = function(n) {
    return n ** 0.5
}

console.log(raiz(49))

const quadrado = (v , a=2) => {
    return Math.pow(v , a)
}

//console.log(quadrado(3, 3))

const concatenar = n => `Bom dia, ${n}`

console.log(concatenar('alexsa'));

//Esse caso em específico cabe utilizar essa forma pois é somente o retorno, em uma função que possui outras linhas de código além do retorno, essa forma não é a melhor


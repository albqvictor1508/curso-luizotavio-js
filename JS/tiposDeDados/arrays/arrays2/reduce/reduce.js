function criaArray() {
    const array = [1,10,15,2,30,45,19, 39];
    return array;
}

function somarArray() {
    const array = criaArray();
    console.log(array)
    const soma = array.reduce((acumulador, valor) => {
        return acumulador += valor;
    }, 10);//dessa forma eu posso colocar o valor que eu quiser para o acumulador.

    //se o valor nao for definido, automaticamente se torna 0.

//reduziu o array inteiro à um só elemento, a soma de todos os valores
    console.log(soma);
}
somarArray();
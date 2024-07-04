function criaArray() {
    const array = [1,10,15,2,30,45,19,39];
    return array;
}

function somarArray() {
    const array = criaArray();
    const soma = array.reduce((acumulador, valor) => {
        return acumulador += valor;
    }, 10);//dessa forma eu posso colocar o valor que eu quiser para o acumulador.

    //se o valor nao for definido, automaticamente se torna o primeiro valor do array.

//reduziu o array inteiro à um só elemento, a soma de todos os valores
    console.log(soma);
    subtrairArray();
}
somarArray();

function subtrairArray() {
    const array = criaArray();
    const subtrae = array.reduce((acumulador, valor) => {
        return acumulador -= valor; 
    });
    console.log(subtrae);
}

function criaPessoa() {
    const pessoas = [
        {nome: 'alexsa', idade: 16},
        {nome: 'victor', idade: 17},
        {nome: 'joseana', idade: 51},
        {nome: 'natanael', idade: 66},
        {nome: 'lena', idade: 60},
    ]
    return pessoas;
}

function RetornaMaisVelho() {
    const pessoas = criaPessoa();
    const maisVelho = pessoas.reduce((acumulador, obj) => {
    if(acumulador.idade > obj.idade) return acumulador;
    return obj;
    //Lógica para atribuir ao acumulador o maior número dentro de um objeto (deve funcionar para array também, só que ainda mais simples)
    });
    console.log(maisVelho);
}
RetornaMaisVelho();
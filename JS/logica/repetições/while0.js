
function NumeroAleatorio(minimo, maximo) {
    const random = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(random);
}
const min = 1;
const max = 50;
let numero = NumeroAleatorio(min,max);
numero = 25;
//Dessa forma, a condição do while será falsa e ele não exibirá nada, mas o do while exibe.

do {
    numero = NumeroAleatorio(min,max);
    console.log(numero);

} while (numero !== 25);

//Como o do while primeiro executa para depois checar, ele vai substituir o valor da variável para o valor que está dentro dele e executar a condição.

//variavel 'numero' que chama a função colocando as variaveis min e max como parâmetros

//o while indica que enquanto a condição que afirma que o número não pode ser igual 25 for falsa, os numeros aleatórios continuarão a ser gerados.

while (numero !== 25) {
    numero = NumeroAleatorio(min,max);
    console.log(numero);

    
}

//Fórmula do MDN para pegar um número aleatório utilizando Math.random para trazer um numero aleatório e math.floor para arredondar esse numero pra baixo.



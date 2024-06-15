const numeros = [1,2,3,4,5,6,7,8];

for (let numero of numeros) {

    if (numero === 1) {
        console.log('pulei o 1');
        continue;
    }
    if (numero === 5) {
        console.log('pulei o 5');
        continue;
    }
    if (numero === 7 || numero === 8) {
        console.log('pulei o 7 e o 8');
        
        continue;
    //Não vai ser exibido nenhum dos dois, tb pode ser feito dessa maneira.
    }
    console.log(numero);

    if (numero === 4) {
        console.log(numero);
        break;
    // break: vai procurar o 4 e quando achar vai sair do laço, util para grandes arrays e para aumentar o desempenho da aplicação.
    }

}

//O numero 1 e 5 não vão ser exibidos.

//tudo que estiver dps do continue no if será ignorado.
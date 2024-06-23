function retornarFuncao(carro) {
    return function() {
        return carro;
    }
}
const funcao = retornarFuncao('honda civic');
const funcao2 = retornarFuncao('jeep compass');
const funcao3 = retornarFuncao('jeep renegade é um lixo!');
console.dir(funcao());
console.dir(funcao2());
console.dir(funcao3());

//Dito isso possuem 3 funções, com 3 diferentes closures

//closures => é a habilidade de uma função filha de interagir ou utilizar os dados da função pai.

const escolherRoupa = (calça,camisa,tênis) => {
    function escolherCamisa() {
        if (camisa === 'lacoste'|| camisa === 'seaway' || camisa === 'estampa da nike') {
            console.log('comigo não anda!');
            return;
        }
        console.log('chave!');
    }

    function escolherTênis() {
        if (tênis === 'fila'|| tênis === 'nike shox'|| tênis === 'lacoste') {
            console.log('comigo não anda!')
            return;
        }
        console.log('chave!');
    }

    function escolherCalça() {
        if (calça === 'azulona'|| calça === 'skinny da renner'|| calça === 'cargo bege do polishop') {
            console.log('comigo não anda!');
            return;
        }
        console.log('chave!');
    }
    escolherCalça();
    escolherCamisa();
    escolherTênis();
    return 'roupa escolhida com sucesso!';
}
console.log(escolherRoupa('skinny', 'lacoste', 'nike shox'))

console.dir(escolherRoupa);

//Cada função dentro de 'escolherTênis' possui um closure, ou seja, algo usado da função pai, que podem ser tanto constantes e variáveis, quanto parâmetros e outras coisas
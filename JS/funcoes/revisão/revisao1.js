const vito = function(amor,...nomes) {
    console.log(amor,nomes);
    function vitoFilho() {
        console.log('vitoFilho(f): a função "vito" é meu closure');
        return function vitoNeto() {
            console.log(`\n vitoNeto(f): a função 'vitoFilho' é meu closure`);
        }
    }
    return vitoFilho;
}

const victor = vito();
const vitofilho = victor();
//console.log(vitofilho)

//vito('funcao vito: ama muito a mulher dele alexsa', 'albuquerque', 'arruda', 'faz programas on-line', 'homem da casa');

function recebervitoNeto() {
     const vito = vitofilho();
    console.log(vito);
}
recebervitoNeto();

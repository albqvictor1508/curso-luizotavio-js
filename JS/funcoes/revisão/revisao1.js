const vito = function(amor,...nomes) {
    console.log(amor,nomes);
    console.log(arguments)
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


function recebervitoNeto(vito) {
    vito = vitofilho();
    console.log(vito);
    
}
recebervitoNeto();

vito('FUNCAO VITO: ama muito a mulher dele alexsa', 'albuquerque', 'arruda', 'faz programas on-line', 'homem da casa');
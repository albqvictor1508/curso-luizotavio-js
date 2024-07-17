function NumAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
}

function FuncoesASerExecutadas(msg, tempo, func) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('TA ERRADO SEU MSR, CABAÇO, FUDIDO, MACACO PRETO, SEM FAMILIA, SÓ PODE STRING!!!!!!'));
        
        setTimeout(() => {
            resolve(msg)
            //if(func) func();se receber esse parâmetro,execute ele
        }, tempo);
    })
}
/*FAZENDO COM CALLBACK

FuncoesASerExecutadas('levei alexsa na escola', NumAleatorio(1,3), () => {
    FuncoesASerExecutadas('to codando', NumAleatorio(1,3), () => {
        FuncoesASerExecutadas('vou trabalhar jajá', NumAleatorio(1,3), () => {
            FuncoesASerExecutadas('e vou lavar a moto hoje', NumAleatorio(1,3), () => {
                console.log();
                console.log('fim do callback!');
            })
        })
    })
})

DESSA FORMA, O CÓDIGO FICA HORROROSO DE FEIO E DESORGANIZADO
*/

FuncoesASerExecutadas('levei alexsa na escola', NumAleatorio(1,3))
.then(tarefa => {
    console.log(tarefa);
    return FuncoesASerExecutadas('to codando', NumAleatorio(1,3));
}).then(tarefa2 => {
    console.log(tarefa2);
    return FuncoesASerExecutadas('vou trabalhar jajá', NumAleatorio(1,3));
}).then(tarefa3 => {
    console.log(tarefa3);
    return FuncoesASerExecutadas('e vou lavar a moto hoje', NumAleatorio(1,3));
}).then(tarefa4 => {
    console.log(tarefa4);
    return FuncoesASerExecutadas('1231312', NumAleatorio(1,3))
}).then(() => {
    console.log();
    console.log('fim da promisse')
}).catch(e => {
    console.log(e);
})

//DEIXA O CÓDIGO MAIS LEGIVEL E FACIL DE TRATAR

console.log('VOU EXECUTAR PRIMEIRO QUE A PROMISSE');
console.log();
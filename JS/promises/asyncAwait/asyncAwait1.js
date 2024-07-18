const tempoAleatorio = (min = 0 ,max = 3) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function criaTarefa(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== 'string') reject('não pode número irmão')
            resolve(msg)
        }, tempo)
    })
}

async function AprendendoAsyncAwait() {
    try {
        const tarefa1 = await criaTarefa(`já fiz os mistos de alexsa`, tempoAleatorio());
        console.log(tarefa1);

        const tarefa2 = await criaTarefa(`vou codar e aprender a consumir API hehehe`, tempoAleatorio());
        console.log(tarefa2);

        const tarefa3 = await criaTarefa(1234, tempoAleatorio());
        console.log(tarefa3);
    } catch(erro) {
        console.log(erro + ' (só string no baguio)')
    }
}
AprendendoAsyncAwait();
//async e await não tratam erros, então podemos utilizar try catch para tratar
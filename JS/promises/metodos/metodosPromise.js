function criaTarefa(tarefa, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof tarefa !== 'string') {
            reject('se tiver erro o promise.all vai retornar o erro');
            return false;
        }


        setTimeout(() => {
            resolve(tarefa + ' - promisse');
        }, tempo)
    })
}

function PromiseAll() {
    const promessas = [
        'Primeiro Valor (promessa resolvida)',
        criaTarefa('andar com billy', 3000),
        criaTarefa('sair com alexsa', 1500),
        //criaTarefa(2508, 2000),
        'Ultimo valor (promessa resolvida)',
    ];

    Promise.all(promessas)
    .then(tarefa => {
        console.log(`TAREFAS RESOLVIDAS\n`);
        console.log(tarefa);
    })
    .catch(e => console.log(`ERRO: ${e}`));

//mesmo que retorne o erro, ele ainda executa todas as outras promises
}
PromiseAll();

function promiseRace() {
    
}
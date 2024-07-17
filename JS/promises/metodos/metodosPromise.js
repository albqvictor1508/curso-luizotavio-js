function criaTarefa(tarefa, tempo) {
    return new Promise((resolve, reject) => {
        
        
        setTimeout(() => {
            if(typeof tarefa !== 'string') {
                reject('ERRO CUZAO');
                return false;
            }
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

    //se tiver um erro, vai retornar o erro, se não tiver, vai retornar todas as promisses.
    Promise.all(promessas)
    .then(tarefa => {
        console.log(`TAREFAS RESOLVIDAS\n`);
        console.log(tarefa);
    })
    .catch(e => console.log(`ERRO: ${e}`));

//mesmo que retorne o erro, ele ainda executa todas as outras promises
}
//PromiseAll();



function promiseRace() {
    const promessas = [
        'vou ser escolhido',
        criaTarefa('dormir', 1000),
        criaTarefa('acordar', 2000),
        criaTarefa('treinar', 2500),
        criaTarefa('viver o amor', 5),
        criaTarefa('deixar o futuro mostrar oque tem guardado', 3000),
        criaTarefa(123, 1),
    ];
    
//promice.race vai retornar o primeiro valor.

//mesmo depois de retornar o primeiro valor, ele ainda vai executar os tempos dos outros valores
    Promise.race(promessas)
    .then(promessa => console.log(promessa))
    .catch(e => console.log(`peguei o erro: ${e}`))
}
//promiseRace();

function PromiseResolveReject() {
    let jogo = true;
    if(typeof jogo !== 'boolean') {
        jogo = false;
        return Promise.reject('vai toma no cu irmao');
    }

    if(jogo) return Promise.resolve(`já tenho hehe`);

    else {
        return criaTarefa('Baixei o jogo', 2500)
    }
}
PromiseResolve()
.then(jogo => console.log(jogo))
.catch(e => console.log(e))
const tempoAleatorio = (min,max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function PromiseTradicional(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new TypeError('não pode número irmão'))
    setTimeout(() => {
            resolve(msg)
    }, tempo)
    })
}

PromiseTradicional('eu amo minha mulher', tempoAleatorio(0,3))
.then(amorLove => {
    console.log(amorLove);
    return PromiseTradicional('eu amo muito a minha namorada', tempoAleatorio(0,4))
})
.then(amor => {
    console.log(amor)
    return PromiseTradicional('eu amo mais que tudo a minha namorada', tempoAleatorio(0,3))
})
.then(amor => {
    console.log(amor);
})
.then(amor => {
    console.log(`\nvamo parar por aqui se n eu falo o dia todo e ainda n da o bastante`);
    return PromiseTradicional(1234, tempoAleatorio(0,3))
})
.catch(e => {
    console.log('\n',e)
})

function PromiseAll() {
    const promessas = [
        PromiseTradicional('mamaco', tempoAleatorio(0,3)),
        PromiseTradicional('cavalo', tempoAleatorio(0,3)),
        PromiseTradicional('cachorro', tempoAleatorio(0,3)),
        PromiseTradicional('jabuti', tempoAleatorio(0,3)),
        `final dos animais`
    ];

    Promise.all(promessas)
    .then(animais => {
        console.log(`começo dos animais`);
        console.log(animais);
    })
    .catch(erro => {
        console.log(erro);
    })
    
}
PromiseAll();

function PromisseRace() {
    const promessas = [
        PromiseTradicional('mamaco', tempoAleatorio(0,3)),
        PromiseTradicional('cavalo', tempoAleatorio(0,3)),
        PromiseTradicional('cachorro', tempoAleatorio(0,3)),
        PromiseTradicional('jabuti', tempoAleatorio(0,3)),
    ];

    Promise.race(promessas)
    .then(primeiraPromiseResolvida => {
        console.log('vou exibir a primeira promisse a ser resolvida\n')
        console.log(primeiraPromiseResolvida)
        console.log('\nfim')
    })
}
PromisseRace();
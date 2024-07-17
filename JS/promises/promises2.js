function NumAleatorio(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function criaOrdem(nome, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof nome !== 'string') reject('e isso é nome de veiculo seu msr?')
        setTimeout(() => {
            resolve(nome);
        }, tempo);
    })
}

criaOrdem('uno way com escada', NumAleatorio(1,5)).then(veiculo => {
    console.log(`${veiculo} é o primeiro!`);

    return criaOrdem('start 160', NumAleatorio(1,5));
}).then(veiculo2 => {
    console.log(`${veiculo2} é o segundo!`);

    return criaOrdem('fiat mobi 2019', NumAleatorio(1,5));
}).then(veiculo3 => {
    console.log(`${veiculo3} é o terceiro!`);
    
    return criaOrdem(1123, NumAleatorio(1,5));
}).then(() => {
    console.log();
    console.log('e com isso, a corrida é finalizada!!')
}).catch(e => {
    console.log('Erro: ', e);
})



const rand = (min = 500, max = 3000) => {
    const numero = Math.random() * (max - min) - min; //calculo pra gerar numero aleatorio
    Math.floor(numero);
    return numero
//forma mais simples de fazer pois os parametros não vão ser enviados, assumindo esses valores, para gerar um numero aleatorio
}

function alexsa(callback) {
    const aleatorio = rand();
    setTimeout(function() {
        console.log('alexsa');
        if(callback) callback();
        //o if tem q ta dentro do setTimeOut para isso ocorrer
    }, aleatorio);
}

function é(callback) {
    const aleatorio = rand();
    setTimeout(function() {
        console.log('é');
        if(callback) callback();
    }, aleatorio);
}

function gostosa(callback) {
    const aleatorio = rand();
    setTimeout(function() {
        console.log('gostosa');
        if(callback) callback();
    }, aleatorio);
}

alexsa(function() {
    é(function() {
        gostosa(function() {
            console.log('callback!')
        })
    })
})


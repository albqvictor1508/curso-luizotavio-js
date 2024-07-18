const tempoAleatorio = (min,max) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function PromiseTradicional(msg, tempo) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve(msg)
        }, tempo)
    })
}

P

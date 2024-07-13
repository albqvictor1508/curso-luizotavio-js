function carro(nome) {
    const beber = {
        beber() {
            console.log(`O ${nome} ta bebendo pa krl`);
        }

    }
    const correr = {
        correr() {
            console.log(`O ${nome} está correndo`);
        },
    }
    const freiar = {
        freiar() {
            console.log(`O ${nome} está freiando`)
        },
    }

//formas mais simples que a anterior para criar prototypes.

    const carroPrototype = {...beber, ...correr, ...freiar};
    const carroPrototype2 = Object.assign( {}, beber, correr, freiar);
    return carroPrototype2;
}

function criaCarro() {
    const MeuCarro = carro('gol bolinha');
    console.log(MeuCarro);
}
criaCarro();

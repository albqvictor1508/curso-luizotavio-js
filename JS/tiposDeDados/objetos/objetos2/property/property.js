function Carro(model,ano,stts) {
    this.modelo = model;
    this.status = stts;

    Object.defineProperties(this,{
        modelo: {
            value: 'celta',
            enumerable: true,
            writable: false,
            configurable: false,
        },
        status: {
            value: 'liso',
            enumerable: true,
            writable: false,
            configurable: true,
        }
    })
}

function carro1() {
    const carro = new Carro('fiat fastback', 2021, 'pouco usado!');
    console.log(carro);
    console.log(Object.keys(carro))

}
carro1();

//REVISAR ISSO AMANHÃ
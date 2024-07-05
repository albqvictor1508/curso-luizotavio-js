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
            get: function() {
                return stts;
            },
            set: function(valor) {
                if(Number(valor)) return;
                stts = valor;
            },
            enumerable: true,
            configurable: true,
        }
    })
}

function carro1() {
    const carro = new Carro('fiat fastback', 2021, 'pouco usado!');
    console.log(carro);
    carro.status = 'muito usado!';
    //console.log(carro.status);

}
carro1();

function Moto(cilin) {
    this.cilindradas = cilin;
    this.cor = 'pretona';
    this.ano = '2022';

    let cilindradas = this.cilindradas;
//Usar em uma variável quando for chamar uma chave ao invés de um parâmetro, para não criar um loop infinito
    Object.defineProperty(this,'cilindradas', {
        get: function() {
            return cilindradas;
        },
        set: function(valor) {
            const transformar = valor.split(' ');
            const cilindrada = Number(transformar.splice(0,1));
            if(!cilindrada) throw new TypeError('não possui número')
            cilindradas = `${cilindrada} cilindradas`; 
            return cilindradas;
        },
        configurable:false,
    });
    Object.defineProperty(this, 'cor', {
        writable:true,
        configurable: false,
    })
}

function moto1() {
    const moto = new Moto('100 cilindradas');
    moto.cilindradas = '800 cilindradas'
// o valor do setter ainda pode ser mudado mesmo com 'configurable', mas n pode ser deletado
    delete moto.cilindradas;
    moto.cor = 'ciano';
    console.log(moto, moto.cilindradas);
}
moto1();
//REVISAR ISSO AMANHÃ
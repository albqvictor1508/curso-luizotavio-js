function Moto(ano, cor, cilin) {
    this.cor = cor;
    this.ano = ano;
    this.cilin = cilin;

    Object.defineProperties(this, {
        cor: {
            get: function() {
                return cor;
            },
            set: function(novaCor) {
                if(novaCor === 'amarela') console.log('mto feio pqp');
                cor = novaCor;
            },
            enumerable: true
        }
    })
}

const criaMoto = () => {
    const moto = new Moto(2021, 'amarela', 250);
    moto.cor = 'amarela';
    console.log(moto.cor);
}
criaMoto();
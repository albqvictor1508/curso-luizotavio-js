function criaClasse() {
    class Automóvel {
        constructor(nome) {
            this.nome = nome;
            this.ligado = false;
        }

        ligar() {
            if(this.ligado) console.log(`${this.nome} já está ligado!`);

            return this.ligado = true;
        }

        desligar() {
            if(!this.ligado) console.log(`${this.nome} já está desligado!`);

            return this.ligado = false;
        }
    }
    const automovel = new Automóvel('carro');
    automovel.ligar();
    console.log(automovel);
    return Automóvel;
}

function criaAutomovel() {
    const automovel = criaClasse();
    console.log(automovel);

    class Carro extends automovel {
        constructor(nome, roda, cor) {
            super(nome);
            this.roda = roda;
            this.cor = cor;
        }

        andando() {
            console.log('o carro tá andando...')
        }

        desligar() {
            console.log('esse métodos já existe');
        }
    }

    return Carro;
}

function criaCarro() {
    const carro = criaAutomovel();

    const NovoCarro = new carro('corsa','aro 20 cromada','pretão');

    NovoCarro.ligar();
    NovoCarro.ligar();
    console.log(NovoCarro.ligado)
}
criaCarro();

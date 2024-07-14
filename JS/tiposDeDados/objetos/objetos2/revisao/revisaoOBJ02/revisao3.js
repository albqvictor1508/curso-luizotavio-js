function Carro(nome, preco, ano) {
    this.nome = nome;
    this.preco = preco;
    this.ano = ano;

    Object.defineProperty(this, 'ano', {
        get: function() {
                return ano;
        },
        set: function(ano) {
            if(ano < 2015) return `IDOSOOOOOOOO BOMBA ${ano}`;
            return valor
        },
        enumerable: true,
    })
}

function criarCarro() {
    const carro = new Carro('corolla', 120000, 2018);
    carro.ano = 2012;
    
    console.log(carro.ano);
}
criarCarro();
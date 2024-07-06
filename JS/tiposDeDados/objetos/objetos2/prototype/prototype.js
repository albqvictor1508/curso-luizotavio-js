function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoa.prototype.macaco = 'tu é macaco!';

Pessoa.prototype.fala = function() {
    return `${this.nome} ${this.sobrenome} tem ${this.idade} anos!`
}
Pessoa.prototype.nomeCompleto = function(nome, sobrenome) {
    return `Seu nome completo é: ${nome} ${sobrenome}`;
}
Pessoa.prototype.darCarro = function(...nomes) {
    const min = 1;
    const max = nomes.length;

    nomes.forEach((valor, index) => {
        const rand = Math.floor(Math.random(index) * (max - min + 1)) + min;
        const carros = ['fiat toro', 'jeep renegade', 'jeep compass', 'up', 'spin',];

    })
    return rand;
}

function criaObjeto() {
    const pessoa1 = new Pessoa('vito', 'albuquerque',80);
    console.log(pessoa1.darCarro);
}



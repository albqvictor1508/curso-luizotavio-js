function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cavalo = function() {
        console.log('cavalo');
    }
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
    const carros = ['fiat toro', 'jeep renegade', 'jeep compass', 'up', 'spin'];
    const rand = Math.floor(Math.random() * carros.length);

    carros.forEach(() => {
        return carros[rand];
    })
    const carro = carros[rand];
    return `você ganhou um ${carro}!`;
}
Pessoa.prototype.LinguagemDeProgramação = 

function criaObjeto() {
    const pessoa1 = new Pessoa('vito', 'albuquerque',80);
    const pessoa2 = new Pessoa('vito', 'albuquerque',80);
    console.log(pessoa1.darCarro());
    pessoa2.cavalo()
}
criaObjeto();



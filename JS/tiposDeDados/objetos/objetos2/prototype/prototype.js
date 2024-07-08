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
Pessoa.prototype.valorAleatorio = function(...nomes) {
    const rand = Math.floor(Math.random() * nomes.length);

    nomes.forEach(() => {
        return nomes[rand];
    })
    const valor = nomes[rand];
    return `você ganhou um ${valor}!`;
}

Pessoa.prototype.ProgramLang = function(...linguagens) {
    const aleatorio = Math.floor(Math.random() * linguagens.length);
    linguagens.forEach(() => {
        return linguagens[aleatorio];
    });
    const ling = linguagens[aleatorio];
    return `Sua linguagem: ${ling}`;
}


function criaObjeto() {
    const pessoa1 = new Pessoa('vito', 'albuquerque',80);
    const pessoa2 = new Pessoa('vito', 'albuquerque',80);
    console.log(pessoa1.valorAleatorio('gloss', 'batom', 'blush'));

    console.log(pessoa2.ProgramLang('javaScripto', 'PHP', 'Java'));
    pessoa2.cavalo()
}
criaObjeto();




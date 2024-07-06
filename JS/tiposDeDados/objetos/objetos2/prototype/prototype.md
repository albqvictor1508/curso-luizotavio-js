## Prototype

O prototype geralmente é utilizado em constructor functions para evitar a repetição de métodos

Ex.:

    function Pessoa(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    Pessoa.prototype.fala = `Eu sou ${this.nome} ${this.sobrenome}, tenho ${idade} anos!`

O prototype é simplesmente o resumo de como o JS funciona, pois todos os métodos são feitos dessa forma, como funções criadas dentro de um protótipo de uma função construtora.

Ou seja, o prototype é algo herdado do elemento pai, 

## Sintaxe 

O prototype possui uma sintaxe muito simples.
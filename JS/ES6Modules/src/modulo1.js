export const macaco = (nome, sobrenome) => `${nome} ${sobrenome}`;

export default class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade + ' anos';

        if(this.nome === 'alexsa') this.princesa();
    }

    princesa() {
        console.log('VOCE É O AMOR DA MINHA VIDA!!!!!!!');
    }

    dados() {
        return `${this.nome} ${this.sobrenome}, de ${this.idade}`;
    }
}



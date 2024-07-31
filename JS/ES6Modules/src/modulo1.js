export const macaco = (nome, sobrenome) => `${nome} ${sobrenome}`;

export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;

        if(this.nome === 'alexsa') this.princesa();
    }

    princesa() {
        console.log('VOCE É O AMOR DA MINHA VIDA!!!!!!!');
    }
}



function criaClasse() {
    class Pessoa {
        constructor(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }
    
        get NomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }

        set NomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    }
    return Pessoa
}
criaClasse();

function criaPessoa() {
    const pessoa = criaClasse();

    const novaPessoa = new pessoa('alexsa', 'linda delicia');

    novaPessoa.NomeCompleto = 'victor pressão de lexsa'
    console.log(novaPessoa.sobrenome);
}
criaPessoa();

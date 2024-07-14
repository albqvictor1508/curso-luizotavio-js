function Classe() {
    const velSymbol = Symbol('velocidade');//descritor dentro dos parênteses é opcional
    class Moto {
        constructor(nome) {
            this.nome = nome;
            this[velSymbol] = 0;
        }

        get velocidade() {
            return this[velSymbol];
        }

        set velocidade(valor) {
            if(typeof valor !== 'number') return;
            if(valor >= 100 || valor <= 0 ) return;

            this[velSymbol] = valor;
        }
        acelerar() {
            if(this[velSymbol] >= 100) return;
            this[velSymbol]++;
        }
        
        freiar() {
            if(this[velSymbol] <= 0) return;
            this[velSymbol]--;
        }
    }
    const motoca = new Moto('motona');
    motoca.nome = 'biz'
    motoca.velocidade = 99;

    console.log(motoca)
}
Classe();

//Exemplo de utilizar getter e setter para proteger o valor da velocidade, para que acelerar e freiar sejam executados sem problemas
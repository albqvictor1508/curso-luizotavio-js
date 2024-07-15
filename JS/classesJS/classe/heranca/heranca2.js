function criaClasse() {
    class Familia {
        constructor(nome) {
            this.nome = nome;
            this.limparCasa = false;
            this.lavarRoupa = true;
            this.seAmar = false;
        }

        xingar() {
            console.log(`vai tomá no cu ${this.nome} seu msr, some daqui inutil da porra`);
        }

        Limpar() {
            if(this.limparCasa) console.log(`você já limpou seu msr`);

            return this.limparCasa = true
        }

        sujar() {
            if(!this.limparCasa) console.log(`você já sujou esta porra mermão`);

            return this.lavarRoupa = false;
        }

        amor() {
            console.log('duvido que essa família se ame');
        }

    }
    criaParentesDaFamilia(Familia);
}
criaClasse();

function criaParentesDaFamilia(Familia) {
    class Parente extends Familia {
        constructor(nome,idade) {
            super(nome);
            this.idade = idade;
            this.gay = true;
        }

        converterIdade() {
            this.idade = this.idade.split(' ');
            const age = Number(this.idade.shift());
            console.log(age);
        }

        julgar() {
            if(this.gay === true) console.log(`TRANSA DE COSTAKKKKKKKKKKKKKKKKK`);
        }

        julgarIdade() {
            if(this.idade < 18) console.log(`TONHÃO JÁ ESSA MSR`);
        }

    }
    const parente = new Parente('josé', '20 anos');
    parente.amor();
    parente.Limpar();
    console.log(parente.limparCasa);

}

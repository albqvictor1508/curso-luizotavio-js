class Cavalo {
    constructor(nome, tamanho) {
        this.nome = nome;
        this.tamanho = tamanho + 'cm duro';
    }

    latir() {
        console.log(`${this.nome} tá latindo`);
    }
}

module.exports = {
    Cavalo,
    seila: () => {

    },
    array: [1,2,3,4,345,345,345,23],
    obegeto: {nome: 'macaco', sobrenome: 'cavalo'},
}
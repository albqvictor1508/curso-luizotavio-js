function Pessoas() {
    const pessoas = [
        {id: 4, nome:'lexsa delicia'},
        {id: 3, nome: 'vito'},
        {id: 2, nome: 'alexsa dnv gostosa'},
        {id: 1, nome: 'mano bily'},
    ]
    
    return pessoas;
}

function criarPessoa() {
    const pessoa = Pessoas();
//atribuição via desestruturação dentro do for
    const NovasPessoas = {};
    for(const { id, nome} of pessoa) {
        // é obrigatório colocar isso em um outro objeto.
        NovasPessoas[id] = nome;

    }
    console.log(NovasPessoas);
}

function criarPessoa2() {
    const pessoa = Pessoas();
    const novaPessoa = new Map();

    for(let person of pessoa) {
//atribuição via desestruturação
        const {id} = person;
        novaPessoa.set(id, person);

//{...pessoa} também pode ser usado em caso de muitas chaves
    }
    console.log(novaPessoa.get(2))
    console.log('\n');

    for(const [iden, {id, nome}] of novaPessoa) {
//atribuição via desestruturação de array.
        console.log(iden, id, nome);
    }

    for(const [iden, {id, nome}] of novaPessoa.keys()) {
        //atribuição via desestruturação de array.
                console.log(iden, id, nome);
    }

    for(const [iden, {id, nome}] of novaPessoa.values) {
        //atribuição via desestruturação de array.
                console.log(iden, id, nome);
    }

    novaPessoa.delete(1);
    console.log(novaPessoa);
}
criarPessoa2();

// Dessa forma, os Objetos manteram a ordem em que foram criados no array e seus números que estavam em strings foram convertidos para number
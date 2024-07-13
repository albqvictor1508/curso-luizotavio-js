## Map no Objeto

O map no objeto é mais complexo que no array, pois é necessário *criar uma instância da constructor function 'Map'* e usar de *set* e *get* para manipular o valor.

## Sintaxe

    const objeto = new Map();

    objeto.set(chave, valor);

*chave* significa a chave que você quer criar ou alterar.

*valor* significa o valor que vai ser atribuido ou alterado a essa chave.

    function Pessoas() {
        const pessoas = [
            {id: 4, nome:'lexsa delicia'},
            {id: 3, nome: 'vito'},
            {id: 2, nome: 'alexsa dnv gostosa'},
            {id: 1, nome: 'mano bily'},
        ]
    
    return pessoas;
    };

    function criarPessoa2() {
    const pessoa = Pessoas();
    const novaPessoa = new Map();

    for(let person of pessoa) {
*//atribuição via desestruturação*
        const {id} = person;
        novaPessoa.set(id, person);

*{...pessoa} também pode ser usado em caso de mts chaves*
    }
    console.log(novaPessoa.get(2))
    }

Um map sendo utilizado dentro de um for para armazenar os 4 objetos dentro desse map e um get para exibir o valor número 2.

## Atribuição via Desestruturação

É muito utilizada nesse map.

        for(const [iden, {id, nome}] of novaPessoa) {
*//atribuição via desestruturação de array.*
        console.log(iden, id, nome);
    }

## For usando Métodos

Também é possível usá-lo com métodos em um for

    for(const [iden, {id, nome}] of novaPessoa.keys()) {
        //atribuição via desestruturação de array.
                console.log(iden, id, nome);
    }

    for(const [iden, {id, nome}] of novaPessoa.values) {
        //atribuição via desestruturação de array.
                console.log(iden, id, nome);
    }

Usando keys e values.

Usando o delete:

    for(const [iden, {id, nome}] of novaPessoa) {
*//atribuição via desestruturação de array.*
        console.log(iden, id, nome);
    }

    novaPessoa.delete(1);

## Map

Vai retornar um array do mesmo tamanho, mas com valores alterados.

Mesma sequência de parâmetros

primeiro: valores;

segundo: indices;

terceiro: array completo;

Exemplo de array com os valores dobrados:

    function criaArray() {
        const array = [1,2,20,19,80,49,54,99,120];
        return array;
    }

    function dobrar() {
        const numeros = criaArray();
        const dobro = numeros.map(valor => valor * 2);
        console.log(dobro);
    }
    dobrar();

a constante dobro tem uma função do array que recebe uma arrow function anônima em que pega os valores do array e dobra eles.

<strong>(Lembrando que o map e o filter percorrem por todo o array)</strong>

    function concatenar() {
        const array = criaArray();
        const concat = array.map(valor => `alexsa delicia ${valor}`);
        console.log(concat);
    }
    concatenar();

Mudando o valor de 'CriaArray()' novamente, dessa vez concatenando com um texto.
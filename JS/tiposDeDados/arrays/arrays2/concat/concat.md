## Concat

É bem literal, é usada pra juntar um array ao outro.

    function Concatenar() {
    this.numeros1 = [1,2,3,4,5,6];
    this.numeros2 = [7,8,9,10,11,12];
    this.concatenação = this.numeros1.concat(this.numeros2);
    }
    const obj = new Concatenar();
    console.log(obj.concatenação);

Exemplo disso dentro de uma constructor function.

Outra forma de concatenar um array é usando o spread operator(...)

    function criaArrays() {
        const array1 = [1,2,3];
        const array2 = [3,4,5];
        const array3 = ['alexsa delicia'];
        ConcatenaArrays(array1, array2, array3);
    }
    criaArrays();

    function ConcatenaArrays(arr1,arr2,arr3) {
        const concatenar = [...arr1, ...arr2, ...arr3, 'concatenados com sucesso!!'];
        console.log(concatenar);

    }

Usando o spread operator em vez da função 'concat'.
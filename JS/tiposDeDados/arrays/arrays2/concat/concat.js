function Concatenar() {
    this.numeros1 = [1,2,3,4,5,6];
    this.numeros2 = [7,8,9,10,11,12];
    this.concatenação = this.numeros1.concat(this.numeros2);
}
const obj = new Concatenar();
console.log(obj.concatenação);

function Concat() {
    const array1 = [3,2,1];
    const array2 = [6,5,4];

    return {
        concatenar: array2.concat(array1),
    }
}

const obj2 = Concat();
console.log(obj2.concatenar)

function Pessoa(name,...sn) {
    this.nome = [name];
    this.sobrenome = [sn];
    this.concatenar = this.nome.concat(this.sobrenome);
    this.exibir = console.log(this.concatenar.join(' '));
}

const p1 = new Pessoa('alexsa' , 'martins dos santos');
p1.exibir;

function ArraySimples() {
    const simplão = [1,2,3,'fim do array simplão'];
    return simplão
//jogando esse array para outra função
}

function Spread() {
    const simplão = ArraySimples();
    
    const arrayzada = ['victor', 'arruda'];
    const array2 = [...arrayzada, 'ama', 'muito', 'alexsa',...simplão];
    console.log(array2);
//também existe essa forma de concatenar
}
Spread();

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
function criaArray() {
    const array = [1,2,20,19,80,49,54,99,120];
    return array;
}

function dobrar() {
    const numeros = criaArray();
    const dobro = numeros.map(valor => valor * 2);
    //console.log(dobro);
}
dobrar();

function concatenar() {
    const array = criaArray();
    const concat = array.map((valor, indice) => `alexsa delicia ${valor} ${indice}`);
//exibindo o valor e o indice do array 
    //console.log(concat);
}
concatenar();

function criaPessoas() {
const pessoas = [
    {nome: 'victor', idade: 17},
    {nome: 'alexsa', idade: 18},
    {nome: 'joseana', idade: 51},
    {nome: 'maria', idade: 5},
    {nome: 'joao', idade: 7},
    {nome: 'billy', idade: 5},
    
]
    mapPessoas(pessoas);
}
criaPessoas();

function mapPessoas(p) {
    const pessoasStringNome = p.map(valor => valor.nome);
    const pessoasDeleteNome = p.map(valor => {
        delete valor.nome;
// ou {idade: valor.idade};
        return valor
    });
    const pessoasAddID = p.map((valor,indice) => {
        valor.id = indice;
        return valor;
    })
    console.log(pessoasStringNome);
    console.log(pessoasDeleteNome);
    console.log(pessoasAddID);
}

//APRENDENDO A MANIPULAR OBJETO.

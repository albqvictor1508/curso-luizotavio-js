const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

//diferente do writeFile, o readFile retorna uma promisse.

const pessoas = [
    {nome: 'alexsa', idade: 16},
    {nome: 'vito', idade: 17},
    {nome: 'maria', idade: 5},
    {nome: 'joseana', idade: 51},
];

const json = JSON.stringify(pessoas);

escrever(caminhoArquivo, json);


async function lerDados(caminho) {
    const dados = await ler(caminho);
    return dados;
}
/*
function renderizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val));
}
*/

lerDados(caminhoArquivo)
.then(dados => {
    dados = JSON.parse(dados);
    dados.forEach(dado => console.log(dado));
})

//async function sempre retorna uma promisse, que pode ser resolvida com o then ou com outra função
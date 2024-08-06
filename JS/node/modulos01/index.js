const primeiroModulo = require('./modulo01');
const {soma} = require('./modulo01');
const {macaco} = require('./modulo01');
//colocar a extensão do arquivo quando n for JS

console.log(primeiroModulo);

console.log(soma);

//console.log(primeiroModulo.falaNome('vito', 'arruda'));

console.log(soma(10,10))

macaco();

exports.seinao = () => {
    return 'sei nao'
}

console.log(this.seinao());
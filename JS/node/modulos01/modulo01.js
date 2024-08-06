const nome = 'lexsa';
const sobrenome = 'maravilhosa de vito';
const nomeCompleto = () => nome + ' ' + sobrenome;

module.exports.falaNome = (nome, sobrenome) => {
    return `${nome} ${sobrenome}!!!`;
};
//poderia ser exports no lugar de module.exports.
exports.idade = 18 + ' anos';
exports.soma = function(x,y) {
    return x + y;
}
//this também pode ser usado
this.detalhe = 'eu também vou ser exportado';

const macaco = () => {
    console.log(macaco);
}

//OU

exports.macaco = macaco;

//exports = {} não é possível
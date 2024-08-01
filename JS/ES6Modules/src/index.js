import Pessoa from "./modulo1";

const pessoa01 = new Pessoa('alexsa', 'dos santos', 17);

console.log(pessoa01)
//no index.js que está setado o entry point do webpack, então algo do index.js que for exportado para outro módulo(arquivo), vai receber valor undefined por não estar sendo lido
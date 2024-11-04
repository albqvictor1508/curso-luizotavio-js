/*
  .+active$ => tudo q terminar com active
  [^in]active$ => tudo que terminar com active e não tiver o "in"
*/

const {lookahead} = require("./base");

//positive look-ahead com active
const positive = /.+(?=[^in]active)/gmi;
console.log(lookahead,lookahead.match(positive)); //Saída: todo resto da string sem o active

//positive look-ahead com inactive
console.log("INACTIVE:", lookahead.match(/.+(?=inactive)/gmi)); //Saída: todos o resto da string sem o inactive

//negative look-ahead com inactive
const negative = /^(?!.+inactive).+$/gmi;
console.log("NEGATIVEEE:", lookahead.match(negative)); //Saída: todos os actives

//negative look-ahead com active
const negativeActive = /^(?!.+[^in]active).+$/gmi;
console.log(lookahead.match(negativeActive)); //Saída: todos os inactives
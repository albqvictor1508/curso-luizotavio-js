const {lookahead} = require("./base");

/* 
  lookbehind e lookahead => funciona como uma fila do em q o primeiro caracter da string é o primeiro da fila, e o último caractér é o ultimo da fila, o lookahead pega de tras da fila pra frente, ou seja, olha pra frente(look ahead).
  
  Já o look behind pega do começo da fila pra trás, ou seja, olha pra trás(look behind)

  /s+ => captura espaço

  /S+ => não captura espaço
*/

const positiveLookBehind = /(?<=ONLINE\s+)\S+.*/gim; //procura por online e espaços e olha pra trás
console.log(lookahead.match(positiveLookBehind)) 

const negativeLookBehind = /^.+(?<!ONLINE.+)/
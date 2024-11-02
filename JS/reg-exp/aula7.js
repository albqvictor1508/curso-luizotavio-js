/*
  w => [a-zA-Z0-9]

  $1 $2 $3 => Retrovisores: quando se tem grupos (entre parênteses), dão a possibilidade de utilizar desses cifrões como variáveis para referenciar os grupos

  No match, esses retrovisores são escritos com "\1 \2 \3"
*/

const {html2} = require("./base");

const regExp = /\<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/g; //[^<] => qualquer coisa que n seja "<"

console.log("html: " + html2);
console.log("match:", html2.match(regExp));

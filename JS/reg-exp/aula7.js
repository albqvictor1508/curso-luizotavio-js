/*
  w => [a-zA-Z0-9]

  $1 $2 $3 => Retrovisores: quando se tem grupos (entre parênteses), dão a possibilidade de utilizar desses cifrões como variáveis para referenciar os grupos

  No match, esses retrovisores são escritos com "\1 \2 \3"

  .* => dot all (qualquer caracter que pode ou não existir)
*/

const {html2} = require("./base"); 

const regExpGambiarra = /\<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/gi; //gambiarra pra quebrar linha 

// \1 => retrovisor apontando pro grupo 1 q é a tag HTML, podendo ter inúmeros grupos no HTMLs

console.log("html:", html2);
console.log("match:", html2.match(regExpGambiarra));


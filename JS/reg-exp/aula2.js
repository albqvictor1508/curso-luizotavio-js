/*
Usando os regex pra encontrar quantos "a" tem no texto e pra trocar os nomes "joao" e "drugs" por "cavalo"

replace e match
*/ 

const {text} = require("./base");
const ex1 = /a/gi;
const found = text.match(ex1);
const editedText = text.replace(/(joao|drugs)(brought)/gi, "'$1 matias'"); 
console.log(editedText);

const editedText2 = text.replace(/joao|maria/gi, names => names.toUpperCase());
console.log(editedText2);

if(found) {
  const numberOfA = found.length;
  console.log(found) //com o match vai retonar um array com todos os elementos da regex
  console.log(numberOfA);

}
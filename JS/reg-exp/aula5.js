/* 
 Conjuntos e Ranges:
 + => como esse quantificador pega 1 ou mais, dessa forma ele pega 1 desses elementos ou uma sequência entre eles

 Ranges:
 [0-9] => de 0 a 9;
 [a-z] => de "a" a "z"

 (esses são exemplos mas poderia ser qualquer letra, maiuscula ou minuscula, qualquer numero, contanto que esteja em ordem crescente)

 Pela tabela unicode também é possível procurar caracteres especiais e letras assentuadas dentro do range

 Palavras assentuadas podem só serem escritas no range que serão encontradas
*/

const conjunto = /[^0-9]+/g;
const lexa = "lexsa martins dos san23tos alexsa bonita alexsa linda 13 45456 12345";
console.log(lexa.match(conjunto));
const {text, archives} = require("./base");
/* 
  Quantificadores:
  * => opcionais(0 ou n) nenhum ou vários
  + => obrigatório(1 ou n) 1 ou vários
  ? => opcionais(0 ou 1) 1 ou nada
  \ => escapa caracter
  {n, m} => n = mínimo; m = máximo
*/
const exp = /Jo+ao+|Ma+rce+lo/gi

for(const archive of archives) {
  const valid = archive.match(/\.(j|J)(p|P)(e|E)?g|G/g);
  console.log(archive, valid);
}
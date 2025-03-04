import _ from "./module"; //o arquivo module cria a função mul e o declaration file adiciona o mul ao tipo LoDashStatic, fazendo um declaration merge com o namespace do lodash, poderes que o declaration file dá.
console.log(_.mul(1, 2, 3, 4, 5, 6, 7));

const alexsa = 'a coisa mais linda desse planeta todinho eu amo ela mais do que tudo coisa mais linda meu pai amado!!';
const array = ['victor', alexsa, '55', 18, 39, 'fim do array'];
const [primeiroNumero, segundoNumero, terceiro, ...resto] = array;

//console.log(primeiroNumero, segundoNumero, terceiro);
//console.log(resto);

//... rest operator/ spread operator

//dependendo de onde for colocado, ele pode pegar o resto ou espalhar os valores.

//será aprofundado mais pra frente

const teamo = 'alexsa';
const array2 = ['eu' , 2, 'te', 39, 'amo', 79, teamo];

const [um, , três, , cinco, , sete] = array2;
//dessa forma, os dados no array são pulados pelo espaço vazio entre as variáveis
console.log(um, três, cinco, sete);

const arrays = [ [4, 67, 88], ['victor', 'ama', 'lexsa'], [24, 70, 25] ];

const [,[,,lexsa]] = arrays;

console.log(lexsa);

//uma forma possível, porém muito complexa

//mais simples 

const [array0, array1, array02] = arrays;

const [,,aalexsa] = array1;

console.log(aalexsa)


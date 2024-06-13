//Exemplos de for of
const arrayy = ['minha','mulher','é a melhor mulher do mundo', 'inteirooooooooooooo']

for (let lexsaa of arrayy) {
    console.log(lexsaa)
}



arrayzada.forEach(function(dados, indices, arrayCompleto) {
    console.log(dados, indices, arrayCompleto)
});
//coloquei esses nomes, mas independente dos nomes, a sequencia dos parâmetros diz oque ele vai receber

//o primeiro parametro sempre será os dados do array, o segundo será o indice, o terceiro o array completo

//o forEach só funciona com array
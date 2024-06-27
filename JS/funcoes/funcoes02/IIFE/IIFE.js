(function() {
    const nome = 'vito ama alexsa';
    console.log(nome);
})();

(function(cachorro) {
    const obegeto = {
        classe: 'obegeto',
        tipo: 'um obegeto',
        professor: 'Luiz Otávio Miranda',
        letra: 'a de alexsa'
    }
    for (let chave in obegeto) {
        console.log(obegeto[chave]);
    }
    function carro() {
        console.log(`função carro: ${obegeto.professor}`);
        console.log(cachorro);
    }
    carro();
})('billy')

//Essa função pode ter um parâmetro e receber argumentos.

//TEM LITERALMENTE A MESMA FUNÇÃO DAQUELA FUNÇÃO 'ESCOPO' QUE EU UTILIZO TODO EXERCICIO. (e ainda é melhor que aquela função por ser executada automaticamente).

//tipo de função extremamente útil para criar uma função que vai ser executada imediatamente em vez de criar ela e chamar ela manualmente

const carroIIFE = (function() {
    console.log('função carroIIFE: macaco')
})();

//utilizando a function expression funciona, porém a variável não se torna uma função


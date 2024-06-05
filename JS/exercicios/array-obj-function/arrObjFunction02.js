function escopo() {
    const form = document.querySelector('form')
    const arr = []
    const res = document.querySelector('#res')
    //com o envio do formulario, essa função evento é ativada, e é a mais importante pois a função ta sendo chamada junto com o carregamento da pagina, mas não executa pois essa função que contém as variáveis e o prevent default, não foi chamada 
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')

        
        function retornarObj() {
            arr.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value,
            })
            //usando array.push({}) da pra criar um objeto dentro de um array sem declarar esse objeto
            console.log(arr)
        }
        function atualizarDiv() {
            res.innerHTML += `<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value} peso: ${peso.value} altura: ${altura.value}</p>`
        }
        retornarObj();
        atualizarDiv();
        //chama as duas funções para serem executadas junto com a função escopo()

        //mas a função escopo não vai executar nada pois a função evento que contem as variáveis de onde serão retirados os argumentos só executa quando o formulário é enviado
    })
}

escopo(); //chamada assim q a pagina é carregada 

//ja to pegando o jeito
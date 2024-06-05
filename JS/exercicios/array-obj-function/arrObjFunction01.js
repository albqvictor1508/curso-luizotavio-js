function escopo() {
    const form = document.querySelector('form');
    const arr = [];  // Array declarado fora da função de evento
    const divRes = document.querySelector('#res')
    
    //usei o querySelector para selecionar o form para tirar o carregamento da pagina sobre ele e declarar as variáveis quando o botão for apertado
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //método 'PreventDefault' previne oque é pra acontecer por padrão, nesse caso está evitando que o formulário seja enviado

        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');


        const criarObjeto = () => {
            //função para criar novos objetos com os dados passados, igual eu fiz na aula de objeto.
            const obj = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            };
            //colocando o objeto dentro do array
            arr.push(obj);
            //função para colocar todos os dados passados dentro do html quando a função for chamada
            atualizarLista(obj)
        };
        const atualizarLista = (obj) => {
            divRes.innerHTML += `<p>${obj.nome}</p>`
            divRes.innerHTML += `<p>${obj.peso}</p>`
        }
        //chamando a função que cria o objeto
        criarObjeto();
    });
}
//chamando a função que engloba tudo
escopo();


//

//revisar esse código quando voltar


//Escopo global: oque é escrito fora de funções arrays ou objetos

//Deixar o escopo global o mais limpo possível por questões de segurança e melhor utilização das variáveis
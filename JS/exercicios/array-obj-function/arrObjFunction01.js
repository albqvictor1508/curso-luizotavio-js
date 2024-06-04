function escopo() {
    const form = document.querySelector('form');
    const arr = [];  // Array declarado fora da função de evento
    const divRes = document.querySelector('#res')

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.querySelector('.nome');
        const sobrenome = document.querySelector('.sobrenome');
        const peso = document.querySelector('.peso');
        const altura = document.querySelector('.altura');


        const criarObjeto = () => {
            const obj = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            };
            arr.push(obj); 
            atualizarLista(obj)
        };
        const atualizarLista = (obj) => {
            divRes.innerHTML += `<p>${obj.nome}</p>`
            divRes.innerHTML += `<p>${obj.peso}</p>`
        }
        criarObjeto();
    });
}

escopo();

//revisar esse código quando voltar

//método 'PreventDefault' previne oque é pra acontecer por padrão, nesse caso está evitando que o formulário seja enviado

//Escopo global: oque é escrito fora de funções arrays ou objetos

//Deixar o escopo global o mais limpo possível por questões de segurança e melhor utilização das variáveis
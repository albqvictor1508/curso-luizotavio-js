function escopo() {
    const inputTarefas = document.getElementById('inputTarefas');
    const btnEnviar = document.querySelector('.Enviar');
    const array = []; 
    const ul = document.querySelector('#tarefas');


    
    btnEnviar.addEventListener('click',adicionarArray);
    inputTarefas.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adicionarArray();
        //keyCode foi preterida por haver muitos problemas, essa forma é mais recomendada

        //tem q ter a primeira letra maiúscula pra pegar
        }
    });
    
    function LimparInput() {
        inputTarefas.value = ''; //zerar o input quando enviar
        inputTarefas.focus();
    }

    function adicionarArray() {
        let tarefas = inputTarefas.value;
        
        if (tarefas) {
            array.push(tarefas);
            mostrarTarefas();
            LimparInput();
        }
    }
    
    //com o parâmetro passado no addEventListener, o botão acionado vai apagar a exata tarefa em que foi apertado
    function retirarArray(indice) {
        array.splice(indice, 1);
        mostrarTarefas();

    }
    function mostrarTarefas() {
        ul.innerHTML = '';
        //poderia ser tanto esse for, quanto um forEach.
        
        //nesse caso é mais facil um forEach
        
        const iterar = array.forEach((tarefa, indice) => {
            //sequencia padrão do forEach: primeiro vem os valores, depois os indices, depois o array completo.

            //tarefa armazena os valores do array, indice armazena os indices.
            const item = document.createElement('li');
            item.textContent += tarefa;
            //para cada valor é criada uma li e pos
            
            const btnApagar = document.createElement('button');
            btnApagar.textContent = `Apagar.`;
            btnApagar.addEventListener('click', () => retirarArray(indice));
            // Chama 'retirarArray' passando o parâmetro que está armazenando os indices do array
            
            item.appendChild(btnApagar);
            ul.appendChild(item);
            return criaButão(iterar);
        });
        //sintaxe correta do forEach.
    }
    function criaButão(iterar) {
        console.log(iterar)
    }

    
    //Preciso de uma forma de tirar esse valor inicial do array e criar o botão de apagar dentro de cada li para ativar a função retirarArray
}
escopo();

//revisar código

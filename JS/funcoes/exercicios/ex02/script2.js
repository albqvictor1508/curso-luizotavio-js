function escopo() {
    const inputTarefas = document.querySelector('#inputTarefas');
    const btnEnviar = document.querySelector('.Enviar');
    const ul = document.getElementById('tarefas');
    const array = [];
    
    btnEnviar.addEventListener('click', function(event) {
        criaTarefa(inputTarefas.value);
    //Dessa forma pegou, utilizando uma variável com esse valor não pegou.
    })
    inputTarefas.addEventListener('keypress',function(event) {
        if (event.key === 'Enter') {
            criaTarefa(inputTarefas.value);
        }
    })

    function criaLi(tarefa, indice) {
        const item = document.createElement('li');
        item.textContent = tarefa; 

        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'Apagar';
        btnApagar.addEventListener('click', () => retirarArray(indice));

        item.appendChild(btnApagar);
        ul.appendChild(item);

        LimparInput();
    }
    function criaTarefa(tarefas) {
        if (tarefas) {
            array.push(tarefas);
            mostrarTarefas();
          
        }
    }
    function LimparInput() {
        inputTarefas.value = ``;
    }

    function mostrarTarefas() {
        ul.innerHTML = '';
        array.forEach((tarefa,indice) => {
            criaLi(tarefa,indice);
        });
    }

    function retirarArray(index) {
        array.splice(index,1);
        mostrarTarefas();
        
    }
}
escopo();
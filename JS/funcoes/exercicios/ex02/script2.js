function escopo() {
    const inputTarefas = document.querySelector('#inputTarefas');
    const btnEnviar = document.querySelector('.Enviar');
    const tarefas = inputTarefas.value;
    btnEnviar.addEventListener('click', function(event) {
        if (tarefas) {
            criaTarefa(tarefas);
        }
    })
    inputTarefas.addEventListener('keypress',function(event) {
        if (event.key === 'Enter') {
            criaTarefa(tarefas);
        }
    })

    function criaTarefa(text) {
        console.log(text);
    }

}
escopo();
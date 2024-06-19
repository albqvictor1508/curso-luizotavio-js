function escopo() {
    const inputTarefas = document.getElementById('inputTarefas');
    const btnEnviar = document.querySelector('.Enviar');
    const array = []; 
    const ul = document.querySelector('#tarefas');
    const btnApagar = document.getElementById('btnApagar')

    
    btnEnviar.addEventListener('click',adicionarArray);
    btnApagar.addEventListener('click',retirarArray);
    
    function adicionarArray() {
        let tarefas = inputTarefas.value;
        array.push(tarefas)
        console.log(array);
        if (tarefas) {
            mostrarTarefas();
        }
    }

    function retirarArray() {
        array.pop();
        mostrarTarefas();
        console.log(`POP: ${array}`)
    }



    function mostrarTarefas() {
        const item = document.createElement('li');
        for (let i in array) {
            item.textContent = array[i];
            ul.appendChild(item);
        }

    }
    adicionarArray();

//Preciso de uma forma de tirar esse valor inicial do array e criar o botão de apagar dentro de cada li para ativar a função retirarArray
}
escopo();

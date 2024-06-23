function escopo() {
    const inputTarefas = document.getElementById('inputTarefas');
    const btnEnviar = document.querySelector('.Enviar');
    const ul = document.getElementById('tarefas')

    btnEnviar.addEventListener('click', function(event) {
        criaTarefa(inputTarefas.value);
    });

    inputTarefas.addEventListener('keypress', function(event) {
        if(event.key === 'Enter') {
            criaTarefa(inputTarefas.value)
        }
    });

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function LimparInput() {
        inputTarefas.value = '';
        inputTarefas.focus();
    }
    
    function criaTarefa(valor) {
        if (valor) {
            const li = criaLi();
            li.textContent = valor;
            ul.appendChild(li);
            LimparInput();
            criaBotão(li);
            salvarTarefas();

        }
    }
/*
    function criaCheckbox(li) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.style.borderRadius = '50%';
        li.appendChild(checkbox);
    }
*/

// pegou mas ficou feio, tenho q aprender como colocar a checkbox no começo

    function salvarTarefas() {
        const liTarefas = ul.querySelectorAll('li');
        const array = [];
        for (let index of liTarefas) {//itera sobre a NodeList
            let text = index.textContent;//pega o texto dentro de cada li da NodeList
            text = text.replace('x', '');//troca o X do botão de apagar por uma string vazia.
            array.push(text);//coloca os textos da NodeList dentro do array
            console.log(array);
            
        }
        criarJSON(array);
    }
//CRIAÇÃO DE JSON PARA SALVAR AS TAREFAS MESMO SE O USUÁRIO SAIR OU ATUALIZAR O SITE
    function criarJSON(arr) {
        const tarefasJSON = JSON.stringify(arr); //converte o array para uma string
        localStorage.setItem('tarefas', tarefasJSON);//'tarefas' => nome do item (chave para obter esse dado); tarefasJSON => o dado 
        
        //armazenamento presente em um navegador, funciona como uma mini base de dados
    }

    function tarefasSalvas() {
        const liSalva = localStorage.getItem('tarefas');// buscando o dado pelo seu nome/chave
        const arraySalvo = JSON.parse(liSalva);//retornando-o para um array
        console.log(arraySalvo);

        for (let tarefaSalva of arraySalvo) {//iterando o novo array
            criaTarefa(tarefaSalva);//criando as tarefas com os dados do array
        }
    }
    tarefasSalvas();//será chamada assim que o site for carregado

    function criaBotão(li) {
        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'x';
        btnApagar.setAttribute('class','apagar');
        li.appendChild(btnApagar);     
    }

    document.addEventListener('click',function(e) {
        const el = e.target;
        if(el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });

}
escopo();

//Dessa forma foi melhor utilizado as funções com parâmetros, foram criadas li's e um botão de apagar que remove a li sem a necessidade de um array e uma estrutura de repetição para percorrer o array, (diferente das outras formas que usaram isso) 

//REVISAR ESSA ATIVIDADE E FAZER MAIS ATIVIDADES ANTES DE PROSSEGUIR.
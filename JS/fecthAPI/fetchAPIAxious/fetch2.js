axios('pessoas.json')
.then(json => carregaJSON(json.data));

/*
pego o pessoas.json usando o axios, que retorna uma promisse, uso o then para resolver a promisse criando uma função de callback e usando o método "data", essa resposta se comportará como JSON, mas não retorna uma promisse, então já é enviada diretamente pra função que exibe

axios usa xmlHTTPRequest
*/ 

const carregaJSON = pessoasJSON => {
    const resultado = document.querySelector('#resultado');
    const table = document.createElement('table');

    for(const pessoa of pessoasJSON) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="nome">${pessoa.nome}</td>
        <td>${pessoa.salario}</td>
        <td>${pessoa.email}</td>
        
        `
        table.appendChild(tr);
    }

    resultado.appendChild(table);
}

/* 
Utilizando fetch API

fetch('pessoas.json')
.then(pessoas => pessoas.json())
.then(json => carregaJSON(json));

pego o pessoas.json usando o fetch, que retorna uma promisse, uso o then para resolver a promisse criando uma função de callback e transformando a resposta em json, que retorna mais uma promisse, uso o then novamente para resolver a promisse, criando outra função de callback e enviado o json para uma função que exibe esses dados

fetch usa fetch msm 

*/
fetch('pessoas.json')
.then(resposta => resposta.json())
.then(pessoas => exibirPessoas(pessoas));

const exibirPessoas = pessoasJSON => {
    const resultado = document.querySelector('#resultado');
    const table = document.createElement('table');
    for(const pessoa of pessoasJSON) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${pessoa.nome}</td>
        <td>${pessoa.salario}</td> 
        <td>${pessoa.salario}</td>
        `
        table.appendChild(tr);
    }
    resultado.appendChild(table)
}

/* 
        resultado.innerHTML += `
        <table>
                <tr>
                    <td>${pessoa.nome}</td>
                    <td>${pessoa.salario}</td>
                    <td class="num">${pessoa.idade}</td>
                </tr>
        </table>
        `;
*/

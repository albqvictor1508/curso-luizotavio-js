function escopo() {
    const container = document.querySelector('.container')
    const div = document.createElement('div');
    const arr = []

    const dados = [
    {tag:'p', content:'Frase 1',},
    {tag:'div', content:'Frase 2',},
    {tag:'footer', content:'Frase 3',},
    {tag:'section', content:'Frase 4',},
    ]

    for(let contador = 0;contador < dados.length; contador++) {
        let {tag,content} = dados[contador];
        console.log(tag,content);
        const elemento = document.createElement(tag);
        elemento.textContent = content;
        div.appendChild(elemento);
        container.appendChild(div);

    }
}
escopo();

//REVISAR ESSE CÓDIGO

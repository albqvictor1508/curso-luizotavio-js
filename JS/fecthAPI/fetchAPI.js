const ajax = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.metodo, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        CarregaPagina(el);
    }
});

async function CarregaPagina(tagA) {
    const href = tagA.getAttribute('href');


    fetch(href)
    .then(response => {
        if(response.status !== 200) throw new Error(`ERRO PORRA`);
        return response.text();
    }).then(paginaHTML => CarregaResultado(paginaHTML))
    .catch(e => console.log(e));
};

function CarregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}   

/*
Como seria usando async function: 

    try {
    const response = await fetch(href);

    if(response.status !== 200) throw new Error(`ERRO PORRA`);
    
    const paginaHTML = await response.text();
    CarregaResultado(paginaHTML);
    } catch(e) {
        console.log(e);
    }
*/
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
    try {
    const href = tagA.getAttribute('href');
    console.log(href);

    const objConfig = {metodo: 'GET', url: href};
    const response = await ajax(objConfig);

    CarregaResultado(response)
    } catch(e) {
        alert(e, ' ta errado mizera')
    }
};

function CarregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
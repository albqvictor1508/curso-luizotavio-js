const ajax = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.metodo, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status > 300) {
            obj.sucesso(xhr.responseText)
        } else {
            obj.erro(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        CarregaPagina(el);
    }
})

function CarregaPagina(a) {
    const href = a.getAttribute('href');

    ajax({
        metodo: 'GET',
        url: href,
        
        sucesso(response) {
            CarregaResultado(response)
        },
        erro(errorText) {
            console.log(errorText);
        }
    })
}

function CarregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
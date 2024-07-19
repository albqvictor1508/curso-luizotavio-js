const ajax = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.metodo, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.sucesso(xhr.responseText);
        }
        else {
            obj.erro(xhr.statusText);
        }
    })
}
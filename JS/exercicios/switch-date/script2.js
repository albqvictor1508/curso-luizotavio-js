function relogio() {
    const res = document.querySelector('#relogio');
    const data = new Date();
    res.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})}`
    }
    relogio();
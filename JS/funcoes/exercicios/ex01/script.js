function escopo() {
    const relogio = document.querySelector('#relogio');
    const data = new Date();

    function AtualizarRelogio() {
    relogio.innerHTML = `${data.getMinutes}:${data.getSeconds}:${data.getMilliseconds}`;
    }
    AtualizarRelogio();

}
escopo();

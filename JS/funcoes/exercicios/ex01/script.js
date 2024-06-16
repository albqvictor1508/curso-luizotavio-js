function escopo() {
    const relogio = document.querySelector('#relogio');
    const data = new Date();

    function atualizarRelogio() {
        relogio.innerHTML = data.toLocaleTimeString('pt-BR', {
            timeStyle: 'medium',
            hour12: false,
        })
    }
    atualizarRelogio();
}
escopo();

setInterval(escopo, 1000);

try {
    console.log(macaco);
} catch (erro) {
    relogio.innerHTML = `tratando um erro...`;
}

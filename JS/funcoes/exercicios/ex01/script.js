function escopo() {
    const relogio = document.querySelector('.relogio');
    const btnStart = document.getElementById('start');
    const btnPause = document.getElementById('pause');
    const btnReset = document.getElementById('reset');
    let segundos = 0;
    let minutos = 0;
    let horas = 0; 

    function formatarTempo(valor) {
    return valor < 10? `0${Number(valor)}`: valor;

    }

    
    function criarTimer() {
        segundos++;
        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos === 60) {
            horas++;
            minutos = 0;
        }
        console.log(formatarTempo(horas), formatarTempo(minutos), formatarTempo(segundos))
    }
    setInterval(criarTimer, 1000)
    
    function mostrarRelogio() {
        relogio.innerHTML = `${formatarTempo(horas)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}` 
    }
}
escopo();

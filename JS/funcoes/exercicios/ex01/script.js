function escopo() {
    const relogio = document.querySelector('.relogio');
    const btnStart = document.getElementById('start');
    const btnPause = document.getElementById('pause');
    const btnReset = document.getElementById('reset');
    let segundos = 0;
    let minutos = 0;
    let milisegundos = 0; 

    btnStart.addEventListener('click',function() {
        ativarTimer();
        setInterval(ativarTimer,20)
    });
    btnPause.addEventListener('click',pausarTimer);
    btnReset.addEventListener('click',zerarTimer);

    function formatarTempo(valor) {
    return valor < 10? `0${Number(valor)}`: valor;

    }

    
    function ativarTimer() {
        milisegundos++;
        if (milisegundos === 100) {
            segundos++;
            milisegundos = 0;
        }
        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }
        
        mostrarRelogio();

    }
    
    function pausarTimer(palse) {
        palse = true
        clearInterval(ativarTimer);
        relogio.style.color = `red`;
    }
    
    function zerarTimer() {
        clearInterval(ativarTimer)
        minutos = 0;
        segundos = 0;
        milisegundos = 0;
    }
    function mostrarRelogio() {
        
        relogio.innerHTML = `${formatarTempo(minutos)}:${formatarTempo(segundos)}:${formatarTempo(milisegundos)}`
    }
    setInterval(mostrarRelogio,20)
    
}
escopo();

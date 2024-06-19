function escopo() {
    const relogio = document.querySelector('.relogio');
    const btnStart = document.getElementById('start');
    const btnPause = document.getElementById('pause');
    const btnReset = document.getElementById('reset');
    let segundos = 0;
    let minutos = 0;
    let milisegundos = 0; 
    let timer;

    btnStart.addEventListener('click',function() {
        if (!timer) {
            ativarTimer();
            timer = setInterval(ativarTimer,20);
            
        }
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
        relogio.style.color = `black`;
        mostrarRelogio();//para executar essa função junto com a q foi chamada

    }
    
    function pausarTimer() {
        clearInterval(timer);
        timer = null;
        relogio.style.color = `red`;
    }
    
    function zerarTimer() {
        relogio.style.color = `black`
        milisegundos = 0;
        minutos = 0;
        segundos = 0;
        timer = null;
        mostrarRelogio();
    }
    function mostrarRelogio() {
        
        relogio.innerHTML = `${formatarTempo(minutos)}:${formatarTempo(segundos)}:${formatarTempo(milisegundos)}`
    }
    
}
escopo();

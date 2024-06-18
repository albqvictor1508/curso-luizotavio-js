function escopo() {
    const relogio = document.querySelector('#relogio');
    let milisegundos = 0;
    let segundos = 0;
    let minutos = 0;
    let timer;
    
    function formatarTempo(valor) {
        return valor > 10? `0${valor}`: valor;
    }

    function MostrarRelogio() {
        relogio.innerHTML = `${minutos}:${segundos}:${'victor'}`; 
    }
    function criarTimer() {
        milisegundos++;
        if (milisegundos === 100) {
            segundos++;
            milisegundos = 0;
        }
        if (segundos === 60) {
            minutos++;
            segundos = 0;

            console.log(formatarTempo(milisegundos),formatarTempo(segundos),formatarTempo(minutos));

        }
        MostrarRelogio();
    }
    document.addEventListener('click',function(evento) {
        console.log(evento.target); //esse evento pode ser nomeado do que quiser, e o .target significa que ele vai identificar qual elemento HTML está sendo clicado.

        const elemento = evento.target; //Armazenando o componente clicado em uma constante

        if (elemento.classList.contains('start')) {
            if(!timer) {
                criarTimer();
                timer = setInterval(criarTimer, 20);

            }
        } 
        if (elemento.classList.contains('pause')) {
            clearInterval(timer);
            relogio.style.color = `red`;
        }
        if (elemento.classList.contains('reset')) {
            clearInterval(timer);
            minutos = 0;
            milisegundos = 0;
            segundos = 0;
            relogio.innerText = `00:00:00`
        }



    })
}
escopo();
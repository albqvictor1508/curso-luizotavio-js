function escopo() {
    const relogio = document.querySelector('.relogio');
    let milisegundos = 0;
    let segundos = 0;
    let minutos = 0;
    let intervalo = null;
    
    function formatarTempo(valor) {
        return valor > 10? `0${valor}`: valor;
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
            

            MostrarRelogio();
        }
    }
    function MostrarRelogio() {
        relogio.innerHTML = `${formatarTempo(minutos)}:${formatarTempo(segundos)}:${formatarTempo(milisegundos)}`; 
    }

    document.addEventListener('click',function(evento) {
        console.log(evento.target); //esse evento pode ser nomeado do que quiser, e o .target significa que ele vai identificar qual elemento HTML está sendo clicado.
        
        const elemento = evento.target; //Armazenando o componente clicado em uma constante
        
        if (elemento.classList.contains('start')) {
            if(!intervalo) {
                criarTimer();
                intervalo = setInterval(criarTimer, 10);
                relogio.style.color = `black`;
                MostrarRelogio();                
            }
        } 
        if (elemento.classList.contains('pause')) {
            clearInterval(intervalo);
            intervalo = null;
            relogio.style.color = `red`;
        }
        if (elemento.classList.contains('reset')) {
            clearInterval(intervalo);
            intervalo = null;
            minutos = 0;
            milisegundos = 0;
            segundos = 0;
            relogio.innerText = `00:00:00`;
            relogio.style.color = `black`; 
        }
        
        
        
    })
}
escopo();


//Dessa forma n sei pq n pegou.
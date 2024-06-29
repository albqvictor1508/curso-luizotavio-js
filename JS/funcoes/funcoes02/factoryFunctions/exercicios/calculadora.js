(function() {
    function criarCalc() {
        return {
            tela: document.querySelector('#telaNum');


            criarBotões() {
                const botões = document.querySelectorAll('.num');
                document.addEventListener('click', function(e) {
                    const clique = e.target;
                    if (clique.classList.contains('num')) {
                        this.calculo(clique.innerText);
                    }
                }.bind(this))//faz o this apontar pro objeto em vez de apontar pro HTML
            }

            calculo(texto) {
                this.tela.value += texto;

            }

            iniciar() {
            
            }
        }
    }
    const objeto = criarCalc();
    objeto.iniciar();
})()

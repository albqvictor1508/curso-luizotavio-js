
(function() {
    function criarCalc() {
        return {
            tela: document.querySelector('#inputCalc'),


            criarBotões() {
                document.addEventListener('click', function(e) {
                    const clique = e.target;
                    if (clique.classList.contains('num')) {
                        this.iniciar(clique.innerText);
                        
                    }
                }.bind(this))//faz o this apontar pro objeto em vez de apontar pro HTML
            },

            calculo() {
                
            },

            
            
            iniciar(texto) {
                this.tela.value += texto;
            
            },
        }
    }
    const objeto = criarCalc();
    objeto.criarBotões();
})()

(function() {
    function Calc() {
        this.tela = document.querySelector('#inputCalc');
        this.botões = function() {
            document.addEventListener('click', e => {
                const clique = e.target;

                if(clique.classList.contains('num')) {
                    this.ativarCalc(clique.innerText)
                }

                if (clique.classList.contains('clear')) {
                    this.limparInput();
                }
                if(clique.classList.contains('del')) {
                    this.apagarNum();
                }
                if (clique.classList.contains('igual')) {
                    this.executarIgual();
                }
            })
        };
        this.teclasTeclado = function() {
            document.addEventListener('keypress', e => {
                if(e.key === 'Enter') {
                    this.executarIgual();  
                } 
            })
        }

        this.ativarCalc = function(valor) {
            this.tela.value += valor;
            this.tela.focus();
        }

        this.apagarNum = function() {
            this.tela.value = this.tela.value.slice(0, -1)
        }
        this.limparInput = function() {
            this.tela.value = '';
        }
        this.executarIgual = function() {
            let valor = this.tela.value;
            try {
                valor = eval(valor);
                if(!valor || !Number(valor)) return;
            } catch(e) {
                alert('ERRO!')
                return;
            }
            
            this.limparInput();
            this.ativarCalc(valor);
        }
    }
    const calculadora = new Calc();
    calculadora.botões();
    calculadora.teclasTeclado();
})();

//USANDO CONSTRUCTOR FUNCTIONS
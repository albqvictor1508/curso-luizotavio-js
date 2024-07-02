
(function() {
    function criarCalc() {
        return {
            tela: document.querySelector('#inputCalc'),

            criarBotões() {
                document.addEventListener('click', function(e) {//this aponta pro HTML
                    const clique = e.target;
                    if (clique.classList.contains('num')) {
                        this.iniciar(clique.innerText);//envia o texto do botão apertado pra função 'iniciar'
                    }
                    if (clique.classList.contains('clear')) {
                        this.limparInput();
                    }

                    if (clique.classList.contains('del')) {
                        this.ApagarNumero(clique.innerText);
                    }

                    if (clique.classList.contains('igual')) {
                        this.executaIgual();
                    }

                }.bind(this))//faz o this apontar pro objeto em vez de apontar pro HTML
            },
            teclasDoTeclado() {
                this.tela.addEventListener('keypress', e => {
                    if(e.key === 'Enter') {
                        this.executaIgual();
                    //Dessa forma o enter vai funcionar se clicar dentro do input da tela.
                    }
                })
            },
            //usando arrow function, não é necessário apontar o this pois o this não aponta pra arrow function
                

            limparInput() {
                this.tela.value = '';
            },
            ApagarNumero() {
                this.tela.value = this.tela.value.slice(0, -1);//vai retirar o ultimo caracter da string ou array (iterável).
            },

            executaIgual() {
                let conta = this.tela.value;
                try {
                    
                    conta = eval(conta);
                    //função perigosa pois converte tudo digitado para código JS, podendo rodar scripts que comprometem a segurança.
                if (!conta || !Number(conta)) return;

            } catch(erro) {
                alert('CONTA INVÁLIDA')
                return;
            }
            this.limparInput();
            this.iniciar(conta)
        },
            
            iniciar(texto) {
                this.tela.value += texto;
                this.tela.focus();
            
            },
        }
    }
    const objeto = criarCalc();
    objeto.criarBotões();
    objeto.teclasDoTeclado();
})()

//preciso de uma forma de fazer com que a função identifique oque é número e oque é operador.

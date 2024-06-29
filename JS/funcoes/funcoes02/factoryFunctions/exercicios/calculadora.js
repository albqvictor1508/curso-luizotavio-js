(function() {
    const botões = document.querySelectorAll('button');
    const tela = document.getElementById('telaNum')
    botões.forEach(botao => {
        document.addEventListener('click',function(e) {
            calculadora(parseInt(botao.textContent))
        })
    })

    function calculadora(operador = '+', acumulador = 0, ...numeros) {
        return {
            operador,
            acumulador,
            numeros,
            calculo() {
                for(numero of numeros) {
                    switch (operador) {
                        case '+':
                            acumulador += numero;
                            break
                        case '-':
                            acumulador -= numero;
                            break
                        case '/':
                            acumulador /= numero;
                            break
                        case '*':
                            acumulador *= numero;
                            break

                        }
                        executarCalc(calculadora);
                }
            }
        }
    }

    function executarCalc(obj) {
    console.log(obj);
    }

})();
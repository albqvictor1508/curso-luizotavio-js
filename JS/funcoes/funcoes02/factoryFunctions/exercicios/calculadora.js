(function() {
    const btn1 = document.querySelector('#um');
    const btn2 = document.querySelector('#dois');
    const btn3 = document.querySelector('#tres');
    const btn4 = document.querySelector('#quatro');
    const btn5 = document.querySelector('#cinco');
    const btn6 = document.querySelector('#seis');
    const btn7 = document.querySelector('#sete');

    
    function calculadora(operador, acumulador, ...numeros) {
        return {
            numeros,
            operador,
            acumulador,
            calculo() {
                for(numero of numeros) {
                    if (operador === '+') acumulador += numero;
                    if (operador === '-') acumulador -= numero;
                    if (operador === '/') acumulador /= numero;
                    if (operador === '*') acumulador *= numero;
                    AtualizarCalc(acumulador);
                }
            }
        }
    }


    function AtualizarCalc(valor) {
        console.log(valor)
        //inputCalc.textContent = valor;
    }

    
})()
(function() {
    const tela = document.getElementById('numTela');
    const btn1 = document.querySelector('#um');
    btn1.addEventListener('click', function() {
        calculadora(1);
        })
    const btn3 = document.querySelector('#tres');
    const btn4 = document.querySelector('#quatro');
    const btn5 = document.querySelector('#cinco');
    const btn6 = document.querySelector('#seis');
    const btn7 = document.querySelector('#sete');
    const btn2 = document.querySelector('#dois');


    
    function calculadora(operador = '+', acumulador = 0, ...numeros) {
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
                    receberObj(calculadora);
                    
                }
            }
        }
    }
    
    function receberObj(obj) {
        console.log(obj, obj.calculo())
        return obj.calculo();
    }
    

    function AtualizarCalc(valor) {
        console.log(valor);
        tela.textContent = valor;
    }

    
})()
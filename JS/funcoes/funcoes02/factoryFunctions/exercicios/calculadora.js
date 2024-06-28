(function() {
    const inputCalc = document.getElementById('inputCalculadora');
    inputCalc.value = 0;
    inputCalc.addEventListener('keypress', function(e) {
       if (e.key === '1') {
        inputCalc.value = 1;
        AtualizarCalc(inputCalc.value);
       }
    })

    function AtualizarCalc(valor) {
        console.log('AtualizarCalc pegou!')
        inputCalc.textContent = valor;
    }

    
})()
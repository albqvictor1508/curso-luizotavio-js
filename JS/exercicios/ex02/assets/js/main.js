function escopo() {
    const form = document.querySelector('form')
    const res = document.getElementById('res')
    
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const conta = (peso.value / altura.value) * peso.value
    
    function AtualizarDiv() {
        if (conta <= 18.5) {
            alert('Abaixo do peso')
        }
        else if (conta < 18.5 && conta > 24.9) {
            alert('Peso normal')
        }
        else if (conta > 25 && conta < 29.9) {
            alert('Sobrepeso')
        }
        else if (conta > 30 && conta < 34.9) {
            alert('Obesidade grau 1')
        }
        else if (conta > 35 && conta < 39.9) {
            alert('Obesidade grau 2')
        } 
        else if (conta > 40) {
            alert('Obesidade grau 3')
        }
        console.log('pegou')
    }
    AtualizarDiv();
});
}
escopo()
alert('teste')


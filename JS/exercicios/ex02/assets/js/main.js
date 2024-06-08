function escopo() {
    const form = document.querySelector('form')
    const res = document.getElementById('res')
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const peso = Number(document.getElementById('peso').value);
        const altura = Number(document.getElementById('altura').value);
        const conta = peso / (altura * altura)
        let alertaPeso;

        console.log(peso, altura)

        //Seria ainda mais fácil se feito por um array, e só manipulasse os indices na condição

    if (!peso) {
        atualizarDiv(`Peso inválido`, false);
        return;
    }
    if (!altura) {
        atualizarDiv(`Altura inválida`, false);
        return;
    }
    
    function condicao() {
        if (conta < 18.5) {
            alertaPeso = '(Abaixo do peso)';
        }
        else if (conta >= 18.5 && conta <= 24.9) {
            alertaPeso = '(Peso normal)';
        }
        else if (conta >= 25 && conta <= 29.9) {
            alertaPeso = '(Sobrepeso)';
        }
        else if (conta >= 30 && conta <= 34.9) {
            alertaPeso = '(Obesidade grau 1)';
        }
        else if (conta >= 35 && conta <= 39.9) {
            alertaPeso = '(Obesidade grau 2)';
        } 
        else if (conta >= 40) {
            alertaPeso = '(Obesidade grau 3)';
        }
        else {
            alert('ERRO!');
        }
        //também poderia utilizar uma variável com OR para realizar essa condição

        //ou poderia fazer uma função composta e não utilizar o else if 
        
    }


    function atualizarDiv(msg, validacao) {

        const p = document.createElement('p');
        res.innerHTML = '';
        p.textContent = msg;
        res.appendChild(p); 

        if (validacao) {
            p.classList.add('resultado-positivo');
            return;
        }
        else {
            p.classList.add('resultado-negativo'); 
            return;       

        }
        

        //na lógica, não é pra executar o console.log pois o return vai encerrar a execução, mas ainda n sei como isso funciona direito.

        //analisar um pouco esse código

    }

    condicao();
    atualizarDiv(`Seu IMC é ${conta.toFixed(2)}: ${alertaPeso}`, true);


});
}
escopo();


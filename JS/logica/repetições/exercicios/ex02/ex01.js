function escopo() {
    let nome = prompt('Digite seu nome:');
    let senha = prompt('Digite sua senha:');

    while(nome === senha) {
        alert('ERRO! (numero e senha estão iguais)');
        nome = prompt('Digite seu nome:');
        senha = prompt('Digite sua senha:');
    }
}
escopo();

/*
    function validação() {
        while (nome === senha) {
            alert('ERRO!')
            nome.setAttribute('placeholder', 'Erro!');
            senha.setAttribute('placeholder', 'Erro!');
            nome.style.borderColor = 'red';
            senha.style.borderColor = 'red';
        
        }

    }
*/
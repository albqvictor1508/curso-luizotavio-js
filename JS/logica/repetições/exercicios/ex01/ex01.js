function escopo() {

    function declararNomeSenhaBtn() {
        const nome = document.getElementById('nome').value;
        const senha = document.querySelector('#senha').value;
    }
    declararNomeSenhaBtn();
    console.log(nome, senha)
    
    
    
    
    
    
    
    
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
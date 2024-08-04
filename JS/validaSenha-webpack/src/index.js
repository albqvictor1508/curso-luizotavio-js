import '../public/assets/css/style.css';
import capturarDom from '../public/modules/formSenha';
import geraSenha from '../public/modules/gerarSenha';

(() => {
  const html = capturarDom();

  html.form.addEventListener('submit', function(e) {
    const el = e.target;
    e.preventDefault();

    const quantidade = html.form.querySelector('#form__inputNumber').value;
    
    const checkboxMaiusculas = () => {
        if(html.chkLetrasMaiusculas.checked) return true;

        return false
    }
    
    const checkboxMinusculas = () => {
        if(html.chkLetrasMinusculas.checked) return true;

        return false;
    }

    const checkboxNumeros = () => {
        if(html.chkNumeros.checked) return true;

        return false;
    }
    
    const checkboxSimbolos = () => {
        if(html.chkLetrasSimbolos.checked) return true;

        return false;
    }
    
    function enviarVerificacao() {
        if(!checkboxMaiusculas() && !checkboxMinusculas() && !checkboxNumeros && !checkboxSimbolos()) {
            console.log(checkboxMaiusculas(), checkboxMinusculas(), checkboxNumeros(), checkboxSimbolos());
            return false;
        } 
        
        const senha = geraSenha(quantidade,checkboxMaiusculas(),checkboxMinusculas(),checkboxNumeros(),checkboxSimbolos());
        exibir(senha);
    }

    function exibir(senha) {
        document.querySelector('.resultado').innerHTML = senha;
    }
    exibir();
    
    const LimparInput = () => {
        const checkboxs = document.querySelectorAll('input[type="checkbox"]');
    
        for(let checkbox of checkboxs) {
            checkbox.checked = false;
        }

        document.querySelector('input[type="number"]').innerHTML = '';
    }
    LimparInput();

    
})
})();
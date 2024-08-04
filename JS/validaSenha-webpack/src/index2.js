import '../public/assets/css/style.css';
import geraSenha from "../public/modules/gerarSenha";
import capturarDom from "../public/modules/formSenha";

function gera() {
    const html = capturarDom();

    html.form.addEventListener('submit', e => {
      e.preventDefault();

        ShowInHTML(geraSenha(
        html.QntCaracteres.value,
        html.chkLetrasMaiusculas.checked,
        html.chkLetrasMinusculas.checked,
        html.chkNumeros.checked,
        html.chkLetrasSimbolos.checked,
      ));
    })
    const ShowInHTML = senha => {
        const div = document.querySelector('.resultado-text').innerHTML = senha;
    }
}
gera();

//os dois funcionam bem, mas mostram formas diferentes de utilizar lógica de programação.
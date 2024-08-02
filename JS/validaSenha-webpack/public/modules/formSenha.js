export default function capturarDom() {
    const form = document.querySelector('form');
    const QntCaracteres = document.querySelector('form__inputNumber');
    const chkLetrasMaiusculas = document.getElementById('form_LetrasMaiusculas');
    const chkLetrasMinusculas = document.getElementById('form__LetrasMinusculas');
    const chkNumeros = document.getElementById('form__AdicionarNumeros');
    const chkLetrasSimbolos = document.getElementById('form__LetrasMaiusculas');

     return {
        form,
        QntCaracteres,
        chkLetrasMaiusculas,
        chkLetrasMinusculas,
        chkNumeros,
        chkLetrasSimbolos,
    }
}

import '../public/assets/css/style.css';
import { geraCPF } from '../public/modules/geraCPF';

(() => {
    const cpf = new geraCPF();
    cpf.verificar();
    const div = `<div class="resultado">${cpf.cpfAleatorio()}</div>`;
    const section = document.querySelector('section');
    section.innerHTML += div;
})();
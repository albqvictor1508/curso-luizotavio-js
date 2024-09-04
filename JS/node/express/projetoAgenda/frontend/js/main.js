import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/login';
import Contato from "./modules/contato";

(function validarCamposLogin() {
    const login = new Login(".formLogin");
    const register = new Login(".formRegister");
    login.init();
    register.init();
})();

(function validaContato() {
    const contato = new Contato(".form-contato");
    contato.init();
})();




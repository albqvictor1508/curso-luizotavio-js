import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/modules';

(function validarCamposLogin() {
    const login = new Login(".formLogin");
    const register = new Login(".formRegister");
    login.init();
    register.init();
})();





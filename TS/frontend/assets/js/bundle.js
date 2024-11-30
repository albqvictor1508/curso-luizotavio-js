/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

(() => {
    const form = document.querySelector("#form");
    const usernameInput = document.querySelector("#usernameInput");
    const emailInput = document.querySelector("#emailInput");
    const PasswordInput = document.querySelector("#passwordInput");
    const repeatPasswordInput = document.querySelector("#password2Input");
    form === null || form === void 0 ? void 0 : form.addEventListener("click", e => {
        e.preventDefault();
        if (handleSubmit()) {
            form.submit();
        }
        function handleSubmit() {
            let valid = true;
            return valid;
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
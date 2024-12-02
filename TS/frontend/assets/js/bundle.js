/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!******************************!*\
  !*** ./src/webpack/index.ts ***!
  \******************************/

(() => {
    const form = document.querySelector("#form");
    const formFields = form === null || form === void 0 ? void 0 : form.querySelectorAll("input");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
        e.preventDefault();
        if (handleSubmit()) {
            form.submit();
        }
        function handleSubmit() {
            let valid = true;
            const errorMessagesArray = document.querySelectorAll(".error-message");
            if (errorMessagesArray) {
                errorMessagesArray.forEach(msg => {
                    for (const input of formFields) {
                        if (!input.value) {
                            msg.textContent = "All the field must to be filled";
                            input.style.borderColor = "red";
                            valid = false;
                        }
                    }
                });
            }
            if (!valid) {
                alert(`form not sended`);
            }
            return valid;
        }
    });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
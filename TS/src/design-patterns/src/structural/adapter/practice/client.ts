import isEmail from "validator/lib/isEmail";

const email = "email@email.com";

isEmail(email) ? console.log("válido") : console.log("inválido");

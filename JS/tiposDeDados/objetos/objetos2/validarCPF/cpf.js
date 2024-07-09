function criarNumeroAleatorio() {
    let cpf = '25081511207';
    criaArray(cpf);
}
criarNumeroAleatorio();

function criaArray(cpf) {
    const arrayCPF = Array.from(cpf);
    MultiplicaPrimeiroDigito(arrayCPF);
}
function MultiplicaPrimeiroDigito(arrayCPF) {
    let total = 0;
    let mult = 10;
    for(let i = 0; i < arrayCPF.length; i++) {
        if(mult === 2) break;
        total += (arrayCPF[i] * mult);
        mult--
    }
    let primeiroDigito = 11 - (total % 11);
    if(primeiroDigito > 9) primeiroDigito = 0;
    console.log(`primeiro dígito: ${primeiroDigito}`);
    MultiplicaSegundoDigito(arrayCPF, primeiroDigito);
    return primeiroDigito;
}

function MultiplicaSegundoDigito(arr, primeiro) {
    let total = 0;
    let mult = 11;
    const array = [...arr, String(primeiro)];
    for(let i = 0; i < array.length; i++) {
        if(mult === 2) break;
        total += (arr[i] * mult);
        mult--
    }
    let segundoDigito = 11 - (total % 11);
    if(segundoDigito > 9) segundoDigito = 0;
    console.log(`segundo dígito: ${segundoDigito}`);
    SepararArray(arr, primeiro, segundoDigito);
}

function SepararArray(array, primeiro, segundo) {
    let digitos = {}
    for(let i = 0; i > array.length; i++) {
        digitos[`dígito${i + 1}`] = array[i];
    }
    console.log(digitos);
}

function concatenarCPF(arr, primeiroDigito, segundoDigito) {

}





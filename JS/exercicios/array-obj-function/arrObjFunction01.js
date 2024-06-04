const nome = document.getElementById('inputName');
const sobrenome = document.getElementById('inputSobrenome');
const peso = document.getElementById('inputPeso');
const altura = document.getElementById('inputAltura')
const btn = document.getElementById('btn')

btn.addEventListener('click', 'converter')

const converter = (nome,sobrenome,peso,altura) => {
    return {
        nome,
        sobrenome,
        peso,
        altura,
    }
}

const arr = [converter]

console.log(arr)
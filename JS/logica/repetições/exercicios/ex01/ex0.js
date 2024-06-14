let nota = prompt('Digite sua nota!');
const respostaPrompt = Number(document.querySelector('.res'));

while (nota < 7) {
    nota = prompt('Nota inválida!, digite novamente.')
    console.log(nota);
    
}
alert('PASSOU!!!!')
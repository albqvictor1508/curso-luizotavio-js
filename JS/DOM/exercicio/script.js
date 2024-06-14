const paragrafos = document.querySelector('.paragrafos')
const paragrafosChild = paragrafos.querySelectorAll('p')


for(let contador in paragrafosChild) {
    console.log(paragrafosChild[contador])
}
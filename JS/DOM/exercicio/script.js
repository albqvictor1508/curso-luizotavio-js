const paragrafos = document.querySelector('.paragrafos')
const paragrafosChild = paragrafos.querySelectorAll('p')


for (let contador of paragrafosChild) {
    contador.style.backgroundColor = `#115666`;
    contador.style.color = `white`
}
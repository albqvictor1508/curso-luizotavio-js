# Manipulando DOM

## Document

document.createNodeText => cria um texto

document.querySelectorAll(elemento, classe) => seleciona todos os elementos e classes, criando uma NodeList

getComputedStyle(elemento, classe) => pega todo o CSS, dessa forma, podendo acessar todo o estilo.

Ex.:

    const bodyStyle = getComputedStyle(document.body);
    const backgroundBody = bodyStyle.backgroundColor;

    ou podendo usar diretamente sem armazenar em uma variável: 

    bodyStyle.backgroundColor;

## Style

a tag style é uma tag CSS que está presente tanto no html, quanto no JS, essa tag permite que você crie ou altere toda a estilização do componente, no JS essa tag quando posta junto do documento, altera o estilo do html colocando um style in-line.



## NodeList

funciona como um array, mas agrupa elementos HTML, geralmente é criada pelo comando:

    document.querySelectorAll(elemento, classe);

E pode ser manipulada como um array

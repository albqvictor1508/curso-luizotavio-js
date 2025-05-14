# Abstract Factory

Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

## About Abstract Factory

- É um padrão de criação, portanto lida com a criação de objetos.
- É uma fábrica, assim como o Factory Method e geralmente é composto por múltiplos Factory Methods.
- Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis
- Separa o código que cria do código que usa os objetos (SRP).
- Permite fácil implementação de novas famílias de objetos (OCP).
- Toda a programação fica focada nas interfaces e não em implementações.

## When i use ?

- Quando o sistema for independente de como seus produtos são criados, compostos ou representados.
- Quando o sistema for configurado para uma família de produtos que podem (ou não) trabalhar juntos.
- Quando o sistema for uma família de objetos projetada para ser usada em conjunto e você necessita garantir essa restrição
- Você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações

## Advantages

- Os produtos sempre serão compatíveis entre si.
- Aplicação clara do Open / Closed Principle (OCP), é fácil adicionar novas fábricas e produtos.
- Aplicação clara do Single Responsability Principle (SRP), o código que cria está separado do código que usa os objetos.

## Disadvantages

- Muitas classes e maior complexidade será introduzida no código.


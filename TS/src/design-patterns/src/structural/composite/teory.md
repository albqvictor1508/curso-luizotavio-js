# Composite

Compor objetos em estrutura de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.

## About Composite

- Faz mais sentido em estruturas que podem ser tratadas hierarquicamente (como árvores)
- Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme
- Prioriza composição ao invés de herança
- Exemplo: Produto solto com preço e caixa com vários do mesmo produto também com preço

### Árvore binária de busca (Binary Search Tree)

![alt text](image.png)

- Os nós que possuem filhos, são chamados de "Nós Internos"
- Os nós que não possuem filhos, são chamados de "Nós Externos"

***Composites são os nós internos, já os nós externos são chamados de Leaf***

## When i use?

- Quando sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore
- Quando você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira

## Advantages

- É muito fácil criar objetos complexos por composição
- É fácil gerar uma hierarquia de objetos
- É fácil usar polimorfismo e recursão
- É fácil adicionar novos tipos de elemento na estrutura (OCP)

## Disadvantages

- Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP), Objetos do tipo Leaf tendem a ter métodos que não usam ou não fazem nada. 
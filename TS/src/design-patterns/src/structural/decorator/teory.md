# Decorator

Muitas linguagens de programação já oferecem decorators, mas o foco é o padrão da GOF.

## About Decorator

- Usa a composição ao invés da herança (sempre prefira composição ao invés de herança)
- É muito parecido com o **Composite** porém tem a intenção diferente 
- É usado para adicionar funcionalidades a objetos em tempo de execução
- Finge o objeto sendo decorado, mas repassa chamadas de métodos para o mesmo
- Pode executar ações antes e depois das chamadas desse objeto que tá sendo decorado
- Pode manipular dados antes do retorno

## Aplicability

- quando você precisa adicionar funcionalidades em objetos sem quebrar ou alterar o código existente
- quando você quiser usar composição ao invés de herança

## Advantages

- Composição sempre é melhor que herança
- É fácil adicionar ou remover comportamento de objetos sem tocar no código já escrito ou testado (OCP)
- É possível decorar um objeto já decorado, adicionando ainda mais funcionalidades (camadas)

## Disadvantages

- Aumenta complexidade
- Meio complicado de debuggar quando tem muito decorator
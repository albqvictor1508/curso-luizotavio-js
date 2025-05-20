# Strategy

Consiste em usar uma classe de alto nível como tipo (classes abstratas, interfaces) ao invés de classes de baixo nível (implementações)

### Behavioral patterns

Os padrões de projeto comportamentais se preocupam com algoritmos, a atribuição de responsabilidades entre objetos e os padrões de comunicação entre eles.

Chain of responsability, command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method e Visitor

## Intenção Oficial

Definir uma família de algoritmos e encapsular cada um deles e fazê-los intercambíveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

## About Strategy

- Separa a regra de negócio de variações de algoritmos que possam existir
- Define uma família de algoritmos cada uma com variação diferente
- Usa composição para permitir a troca de algoritmos em tempo de execução
- Permite a criação de vários algoritmos sem a necessidade de condicionais

## Applicability

- quando você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução
- quando você precisar isolar a regra de negócio do algoritmo que deve ser aplicado (SRP)
- quando você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo

## Advantages

- Troca herança por composição
- Separa a regra de negócio de algoritmos complexos
- Aplica o OCP e o SRP

## Disadvantages



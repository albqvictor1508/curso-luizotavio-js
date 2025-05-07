# Builder

## É um padrão de projeto que trata de objetos complexos
- Classes com construtores muito grandes (complexos)
- Composite (Composição de vários objetos)
- Algoritmo de criação do objeto complexo 

## Permite a criação de um objeto em etapas

## Method chaining (encadeamento de chamada de métodos)

## O objeto final pode variar de acordo com a necessidade

## Padrão complexo

### Estrutura

- Classe (abstrata ou interface mesmo, só precisa estabelecer um contrato) Builder: define a interface de todos os objetos "Builder". As etapas de construção em comum são definidas aqui.

- Classe ConcreteBuilder: Builders concretos implementam a interface de acordo com a sua necessidade. Elas podem produzir produtos diferentes de tipos diferentes (é a classe que vai criar o produto final)

- Classe Product: Os produtos finais são objetos que o cliente deseja consumir. Eles não têm uma interface em comum porque podem ser de tipos diferentes.

- Director: Esta classe é opcional. Ela pode definir a ordem em que as etapas de construção dos objetos são executadas. (caso precise criar uma ordem na execução dos métodos do builder)


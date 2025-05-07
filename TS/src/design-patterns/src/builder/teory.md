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

### Vantagens

- Separa criação de utilização (facilita o SOLID)
- O cliente não precisa criar objetos diretamente
- O mesmo código pode criar objetos diferentes
- Ajuda na aplicação do SOLID

### Desvantagens

- O código final pode se tornar muito complexo

*** Na prática não foi abordado o prototype, mas ele poderia ser usado para fazer a função que o código do index.ts ta fazendo, criando o comportamento e entregando para o usuário tudo pronto ***

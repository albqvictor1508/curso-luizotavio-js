# Factory Method

Factory (Fábrica) - Cria um objeto

Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.

# About Factory Method

- É um padrão de projeto de criação(lida com a criação de objetos)

- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas

- É obtido através de herança, O método fábrica pode ser criado ou sobrescrito por subclasses

- Dá flexibilidade ao código cliente permitindo a criação de novas factories sem a necessidade de alterar código já existente (OCP - Open Close Principle)

- Pode usar parâmetros para determinar os tipos dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados

## Structure

- **Product**: Interface em comum para produtos finais. Classes que implementam o factory method devem retornar produtos que implementam essa interface.

- **Creator**: Responsável pela criação de um factory method abstrato (também pode implementar um factory method). Essa classe pode e deve conter outros membros (métodos e atributos) para sua lógica interna

- **ConcreteProduct**: Produtos concretos que serão retornados pelas classes que implementam o factory method.

- **ConcreteCreator**: A única responsabilidade dessas classes é implementar o factory method informando qual produto será retornado. Também pode implementar lógica para a criação de produtos.

## Applicability

- Use o Factory Method quando não souber com certeza quais os tipos de objetos o seu código vai precisar.

- Use o Factory Method para permitir a extensão de suas factories para a criação de novos objetos(isso ajuda a aplicar o Open / Closed Principle)

- Use o Factory Method para desacoplar o código que cria do código que usa as classes (Single Responsability Principle)

- Use o Factory Method para dar um hook (gancho) às subclasses para permitir que elas decidam a lógica de criação de objetos

- Use o Factory Method para eliminar duplicação de código na criação de objetos.

## Advantages

- Ajuda a aplicar o OCP (Open / Closed Principle) pois ele está aberto para extensão, não para modificação

- Ajuda a aplicar o SRP (Single Responsability Principle) pois ele separa o código que cria do código que usa o objeto

- Ajuda no desacoplamento do seu código
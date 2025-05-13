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
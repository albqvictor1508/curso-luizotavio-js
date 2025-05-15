# Adapter

Converter a interface de uma classe em outra interface esperada pelos clientes. O Adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por causa de suas interfaces incompatíveis

Exemplo.:

    `o plug de carregamento do notebook com a tomada, nenhum dos dois funcionariam sozinhos, é preciso que ajam em conjunto para que meu notebook carregue`

## About Adapter

- É um padrão de projeto estrutural (structural)
- Faz exatamente oque um adaptador da vida real faz (pense em um adaptador de tomadas de um formato para o outro)
- É muito usado para definir limites entre camadas da aplicação
- Também pode ser usado para adaptar interfaces de código legado para um novo código

## 2 Structures

### - Structure By Composition

### - Structure By Multiple Inherance

## Aplicability

- Você não quiser que seu código dependa diretamente de código de terceiros ou legado
- Você quiser usar uma classe existente mas sua interface for incompatível com a interface que seu código ou domínio precisam.
- Você quiser reutilizar várias subclasses que não possuam determinada funcionalidade mas for impraticável estender o código de cada uma apenas para adicionar a funcionalidade desejada (o Decorator também faz isso) 
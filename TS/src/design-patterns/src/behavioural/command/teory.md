# Command

## Intenção Oficial

Encapsular uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas

## About Command

- Transforma uma solicitação (um comando) em um objeto com toda a informação necessária para sua execução
- É a versão orientada a objetos para funções de callback
- Permite que comandos possam ser enfileirados, armazenados ou desfeitos.
- Permite registro de alterações para que possam ser replicadas quando necessário.
- Permite que você crie comandos compostos.
- Desacopla o código do objeto que faz a solicitação com o objeto que recebe a solicitação
- Usa a composição ao invés de herança

## Structure

- Command: A interface de objetos que podem executar comandos.
- ConcreteCommand: Comandos concretos podem executar solicitações simples por conta própria ou delegar tarefas para um objeto "receiver".
- Invoker: quem chama o comando.
- Receiver: executam o comando.

## Advantages
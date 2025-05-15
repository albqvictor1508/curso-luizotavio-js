# Decorator

Muitas linguagens de programação já oferecem decorators, mas o foco é o padrão da GOF.

## About Decorator

- Usa a composição ao invés da herança (sempre prefira composição ao invés de herança)
- É muito parecido com o **Composite** porém tem a intenção diferente 
- É usado para adicionar funcionalidades a objetos em tempo de execução
- Finge o objeto sendo decorado, mas repassa chamadas de métodos para o mesmo
- Pode executar ações antes e depois das chamadas desse objeto que tá sendo decorado
- Pode manipular dados antes do retorno
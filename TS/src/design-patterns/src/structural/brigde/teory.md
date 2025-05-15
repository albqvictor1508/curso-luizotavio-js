# Brigde

**`Muito parecido com o Adapter, somente com uma intenção diferente`**

O Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

## Abstração vs Implementação 

- **Abstração** é um código alto nível que geralmente delega ações para outro objeto.
- **Implementação** é o código que realmente faz o trabalho.

### Adapter vs Bridge

(GOF pág. 208) A diferença chave entre esses padrões está na suas intenções... O padrão Adapter faz as coisas funcionarem após elas terem sido projetadas; O Bridge as faz funcionar ANTES QUE existam... 
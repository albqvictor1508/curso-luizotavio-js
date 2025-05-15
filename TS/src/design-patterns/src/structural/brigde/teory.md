# Brigde

**`Muito parecido com o Adapter, somente com uma intenção diferente`**

O Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

## Abstração vs Implementação 

- **Abstração** é um código alto nível que geralmente delega ações para outro objeto.
- **Implementação** é o código que realmente faz o trabalho.

### Adapter vs Bridge

(GOF pág. 208) A diferença chave entre esses padrões está na suas intenções... O padrão Adapter faz as coisas funcionarem após elas terem sido projetadas; O Bridge as faz funcionar ANTES QUE existam...

## Aplicability

- Você souber que sua estrutura terá abstrações (código de alto nível) e implementações dessa abstração (detalhes) que possam variar de maneira independente.
- Você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura)
- Você quiser dividir uma classe que possa ter diversas variantes (como em produtos e suas variações de cores: CanetaAzul, CanetaVermelha, etc)
- Você quer trocar as implementações em tempo de execução

## Vantagens
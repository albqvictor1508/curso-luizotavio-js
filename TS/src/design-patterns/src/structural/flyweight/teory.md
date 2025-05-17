# Flyweight

## Intenção Oficial

Flyweight é um padrão de projeto estrutural que tem a intenção de usar compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular

## About Flyweight 

- É um padrão de otimização (cuidado)
- Visa economizar memória RAM devido ao grande número de objetos na aplicação
- Resolve o problema de desempenho dividindo o estado de um objeto em "intríseco" e "extrínseco":
    - Estado intríseco é o estado que geralmente não muda ou que muda muito pouco
    - Estado entrínseco é o estado que pode ser movido para fora do objeto por mudar frequentemente
Só deve ser usado se sua aplicação estiver com problemas de alto consumo de memória RAM.
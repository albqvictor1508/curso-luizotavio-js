# Chain of Responsability

Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate

## About Chain of Responsability

- É usado quando uma requisição precisa passar  por uma sequência de operações até ser totalmente tratada.
- Desacopla quem envia de quem vai tratar a requisição
- É muito usado com requisições HTTP.
- É a base para outros padrões de projeto conhecidos (como Middleware usado no express)
- Permite que um objeto **TRATE** a requisição e chame o **PROXIMO** objeto da cadeia.
- Permite que um objeto **NÃO TRATE** a requisição e chame o **PROXIMO** objeto da cadeia.
- Permite que um objeto **TRATE** a requisição e **FINALIZE** a cadeia.
- O cliente pode iniciar a requisição de qualquer objeto caso necessário.


## Advantages

-

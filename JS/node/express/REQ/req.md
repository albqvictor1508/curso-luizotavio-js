## Métodos de Requisição

Anteriormente, foi abordado sobre resposta às requisições, agora sobre receber e tratar uma requisição, utilizando os métodos:

    req.params -> parâmetros da requisição
    
    req.query -> query strings da requisição (chaves com valores mas que não influenciam na url do site)

    req.body -> pega os dados enviados em um formulário por meio de um middleware, que pode ser 'express.urlencode()' ou 'express.json()'
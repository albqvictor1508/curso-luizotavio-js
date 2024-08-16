//tudo no express gira em torno de middlewares, eles são essas funções que recebem requisição, resposta, e o next, que é usado para seguir adiante e executar o proximo middleware, msm que o anterior n tenha sido respondido

//assim como eu usei para logar essas frases na tela, eles também podem ser usados para tratar dados durante a resposta, como se interceptasse os dados enviados (Ex.: o app.get e o app.post usam de middlewares)

exports.meuMiddleware = (req, res, next) => {
    console.log(`Passei pelo middleware global`);
    next();
}

exports.middlewareAlert = (req, res, next) => {
    console.log();
    console.log('só pra te alertar q tbm sou um middleware');
    next();
}

exports.middlewarePaginaHTML = (req, res, next) => {
    console.log('sou o middleware da exclusivo da pagina html!!!');
    next();
}
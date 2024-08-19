exports.MeuMiddleware = (req,res,next) => {
    res.locals.alexsa = 'amor da minha vida!!!!!';
    console.log('vou aparecer em todas as rotas!!');
    next();
}
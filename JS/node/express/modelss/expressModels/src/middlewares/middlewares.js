exports.MeuMiddleware = (req,res,next) => {
    console.log('vou aparecer em todas as rotas!!');
    next();
}
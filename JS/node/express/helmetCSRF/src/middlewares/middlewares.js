exports.MeuMiddleware = (req,res,next) => {
    //locals é uma variável local do middleware q pode ser utilizada em todas as rotas em que ele é enviado (inclusive até dentro dos EJS)
    res.locals.alexsa = 'amor da minha vida!!!!!';
    console.log('vou aparecer em todas as rotas!!');
    next();
}

exports.checarErroCSRF = (err, req, res, next) => {
    console.log(err);
    if(err && err.code === 'EBADCSRFTOKEN') {
        console.log('dentro do if: ' + err);
        return res.send('<h1>ERRO PAIZÃO</h1>');
    }
    //erro que será exibido caso o usuário que envie o formulário n tiver token
    next();
}

exports.csrfMiddleware = (req, res, next) => {
//token sendo criado
    res.locals.csrfToken = req.csrfToken();
    next();
}

//CSRF cria tokens aleatórios nos formulários para que nenhum formulário de outro site consiga fazer um POST para o nosso formulário, (CSRF e HELMET são relacionados a segurança)
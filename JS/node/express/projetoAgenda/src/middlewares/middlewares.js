exports.middlewareGlobal = (req,res,next) => {
    console.log('sou o middleware global');
    next();
}

exports.checarErroCsrf = (erro,req,res,next) => {
    if(erro) return res.render('erro404');
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
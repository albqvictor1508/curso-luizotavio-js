exports.checarFormulario = (req,res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}

exports.checarErroCsrf = (erro,req,res,next) => {
    if(erro && erro.code == 'EBADCSRFTOKEN') return res.render('erro404');
}

exports.csrfMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
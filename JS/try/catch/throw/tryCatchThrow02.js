try {
    console.log('Estou executando');
    console.log('Continuo executando...');
    console.log('Vou executar até que exista um erro!');
    console.log(UmErro); //ERRO (variável não existe)
} catch (erro) {
    console.log('CATCH: VOU COMEÇAR A EXECUTAR')
} finally {

}

//É obrigatório ter um try

//Também pode ser try e finally, sem um catch, Como também pode ser try e catch, sem um finally, ou os 3


try {
    console.log(victor);
} catch (erro) {
    console.log('essa variável não existe!\n');


}

//o try tenta executar um comando, se esse comando dar erro, o catch armazena esse erro e retorna oque você quiser.

//nesse caso mandei retornar um console.log avisando que a variável não existe, mas poderia ser qualquer coisa 

function soma(x,y) {
    if (!Number(x) || !Number(y)) {
        throw new Error('x e y precisam ser números');
    //Error e ReferenceError são funções que podem ser utilizadas para apresentar erros.

    //Também é possível criar novos erros.

    //quando o throw é utilizado, instantaneamente o erro escrito é armazenado pelo catch
    
    }
    return x + y;
}

try {
    console.log(soma(5,5));
    console.log(soma(19,1));
    console.log(soma('victor', 17));
    console.log(soma('alexsa', 16));
} catch (erro) {
    console.log(erro)
//exibindo o erro lançado pelo throw armazenado no catch
}


//o catch vai devolver essa mensagem ao primeiro erro encontrado no try


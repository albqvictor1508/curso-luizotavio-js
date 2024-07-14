function cadrasto() {
    const cadastros = [
        {id: 25, nome: 'alexsa', sobrenome: 'martins'},
        {id: 8, nome: 'victor', sobrenome: 'arruda'},
        {id: 14, nome: 'joseana', sobrenome: 'do carmo'},
        {id: 89, nome: 'vinicius', sobrenome: 'arruda'},
        {id: 20, nome: 'maria', sobrenome: 'livia'},
    ];
    return cadastros;
}
//duas formas de fazer map com objetos

//nesse caso eu vou pegar o nome e tirar o nome do objeto

function Map1() {
    const cadastro = cadrasto();

    const novoCadastro = cadastro.map(objetoCompleto => {
        const {nome} = objetoCompleto;
        delete(objetoCompleto['nome']);

        return {
            ['map1: ' + nome]: objetoCompleto,
            //adicionei map1 pra n confundir
        }
        
    })
    console.log(novoCadastro)
}

function Map2() {
    const cadastro = cadrasto();

    const novoCadastro = {};

    for(const pessoa of cadastro) {
        const {nome} = pessoa
        novoCadastro['map2: ' + nome] = pessoa;
    }
    console.log(novoCadastro);
}
Map2();

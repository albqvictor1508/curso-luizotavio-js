function criaObjeto4(nome, sobrenome, idade, peso) {
    return {
        nome,
        sobrenome,
        idade,
        peso,
        nascimento() {
            console.log('\n')
            const data = new Date();
            const ano = data.getFullYear();
            const transformar = this.idade.split(' ');
            const idadeNova = Number(transformar.splice(0,1));
            const nascimento = ano - idadeNova;
            return `você nasceu em ${nascimento}!`;
        },

        get mensagem() {
        //Transforma o método em uma chave normal (um atributo)
            return 'Deus te ama, ' + this.nome + '!'
        },
        set mensagem(valor) {
            this.nome = valor;
        }
        
        
    }
}

function criaPessoa() {
    const pessoa = criaObjeto4('alexsa', 'martins', '16 anos', '56kg');
    pessoa.nome = 'amor da minha vida';
    console.log(pessoa);
    console.log(pessoa.nascimento());
}
criaPessoa();

function AlterandoMensagem() {
    const pessoa = criaObjeto4('alexsa', 'martins', '16 anos', '56kg');
    Object.freeze(pessoa)
    pessoa.mensagem = 'vito arruda';
//Não alterou o objeto pois tem um freeze que trava o valor.
    console.log(pessoa.mensagem)
}
AlterandoMensagem();

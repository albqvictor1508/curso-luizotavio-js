function pessoa(nome, sobrenome) {
    const pessoa = {
        dormir() {
            console.log('Eu não durmo');
        },
        comer() {
            console.log('Eu como pra krl');
        },
        falar() {
            console.log('To começando a falar menos');
        }
    }

    return Object.assign({}, pessoa);
}

const criarPessoa = () => {
    const pessoaa = pessoa('alexsa', 'eu te amo');
    console.log(pessoaa);
    pessoaa.dormir()
}
criarPessoa();
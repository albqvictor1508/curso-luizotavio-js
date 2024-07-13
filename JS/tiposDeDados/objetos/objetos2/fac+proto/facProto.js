function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando...`);
        },
        comer() {
            console.log(`${this.nome} ${this.sobrenome} está comendo...`);
        },
        dormir() {
            console.log(`${this.nome} ${this.sobrenome} está dormindo...`);
        },
    }
    //criei um objeto vazio e nele coloquei como prototype oque está armazenado nessa variável

    //Porém, quando eu faço isso, o objeto fica vazio, então eu coloco mais uma vírgula e coloco manualmente as propriedades das chaves que eu quero no meu objeto.
    return Object.create(pessoaPrototype, {
        nome: {
            enumerable: true,
            get: function() {
                console.log(nome);
            },
            set: function(valor) {
                if(valor === 'vito' || valor === 'victor') {
                    console.log('esse msr!!!!');
                    console.log();

                }
                
                if(valor === 'alexsa'|| valor === 'lexsa') {
                    console.log('GOSTOSAAAAAAAAAAAAAA!!!!');
                }
                console.log(`setter nome: ${valor}`);
            }
        },
        sobrenome: {
            enumerable: true,
            get: function() {
                return sobrenome;
            },
            set: function(valor) {
                if(valor === 'santos' || valor === 'martins'){
                    console.log('sobrenome da gostosa da minha mulé!!!!!!');
                    console.log();
                }
                console.log(`setter sobrenome: ${sobrenome}`);
            }
        },

    })

};

function Pessoa() {
    const pessoa = criaPessoa('alexsa', 'martins');
    pessoa.nome = 'lexsa';
}
Pessoa();

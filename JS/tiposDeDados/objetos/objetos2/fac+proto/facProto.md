## Factory Function + Prototype

Mesmo que a constructor function seja muito mais usual para isso, a factory function também permite, mas de uma forma diferente `como uma gambiarra`

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

criei um objeto vazio e nele coloquei como prototype oque está armazenado nessa variável

Porém, quando eu faço isso, o objeto fica vazio, então eu coloco mais uma vírgula e coloco manualmente as propriedades das chaves que eu quero no meu objeto.

Também poderia desustruturar em objetos para facilitar o uso.

    function carro() {
        correr() {
            console.log(`O carro tá correndo`);
        },
        freiando() {
            console.log('O carro tá freiando')
        },
        bebendo() {
            console.log('O carro ta bebendo toda a gasolina')
        }
    }

    const carroPrototype = {...correr, ...freiando, ...bebendo};

Uma forma mais simples da forma anterior.

## OBS

Essas formas de fazer vão do gosto de cada pessoa 
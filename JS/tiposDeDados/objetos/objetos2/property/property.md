### Travar somente um valor.

Foi aprendido que usando o 'Object.freeze()' poderia se travar um valor do objeto/array inteiro, mas:

Usando 'defineProperty' -> uma só 

Ou 'defineProperties' -> mais de uma

É possível travar somente um valor ao inves de travar todo o objeto/array.

### Sintaxe

Usando o 'defineProperty' é necessário seguir uma série de definições

    Object.DefineProperty(objeto, chave, objeto que permite configurar o valor{})

Exemplo:

    function Carro(model,ano,stts) {
        this.modelo = model;
        this.status = stts;

        Object.defineProperty(this, 'ano', {
            value: '2 milhão',
            enumerable: false,
        })
    }

Isso só pode ser utilizado em uma constructor function, então o objeto sempre será 'this'

Em caso desse valor setado não for criado, você o cria usando o defineProperty.
#### Value

Dá um valor padrão à aquela chave

#### Enumerable

Enumerable -> mostra a chave

Caso 'enumerable: false' -> o valor não será exibido nem adicionado em nada (nem percorrendo pelo objeto)

Caso 'enumerable: true' -> o valor será exibido e percorrido.

#### Writable

Writable -> pode editar a chave

Indica se o valor pode ou não ser alterado, por padrão do 'defineProperty' ele vem como 'false'

E se mudá-lo para 'true', o valor poderá ser alterado.

#### Configurable

Configurable -> pode configurar a chave

caso for 'true', esse objeto pode ser reconfigurado, ou seja, as configurações postas nele poderão ser alteradas em outras funções, ou em outro lugar do código

caso for 'false', esse objeto não pode ser reconfigurado, ou seja, as configurações postas nele só poderão ser feitas manualmente dentro do objeto

(AINDA É POSSIVEL ALTERAR VALOR DA CHAVE)

também não permite apagar a chave

## Object.keys()

Uma função existente no JS que retorna as chaves daquele objeto em um array.

    const objeto = {
        carro: 'civic',
        cor: 'preto',
        aro: 'cromado',
        status: 'bandido',
    }

    console.log(Object.keys(objeto));

    Exibe as chaves em um array.

Forma bem mais simples de ver as chaves, em vez de usar um 'for' pra isso.

## DefineProperties

Funciona como o 'defineProperty', com os mesmos valores no objeto de configuração, porém com diferenças na sintaxe para definir mais de uma chave

    function Carro(model,ano,stts) {
    this.modelo = model;
    this.status = stts;

    Object.defineProperties(this,{
        modelo: {
            value: 'celta',
            enumerable: true,
            writable: false,
            configurable: false,
        },
        status: {
            value: 'liso',
            enumerable: true,
            writable: false,
            configurable: true,
        }
    })
    }

(Enquanto no 'defineProperty' você escolhe a chave, nesse você cria um mega objeto e coloca todas as chaves que quer definir)

## Obs 

Os valores dentro do objeto que define o 'defineProperty' também aceitam funções anônimas


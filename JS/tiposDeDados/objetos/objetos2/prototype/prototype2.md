### Mais sobre Objetos

Quando um array/objeto é criado, é chamada automaticamente a função construtora que cria objeto/array.

Por isso que podem ser feitos arrays e objetos usando 'new Object() / new Array()';

Pois dessa forma estamos criando diretamente pela função construtora que os cria.

## Prototype

Como todo objeto é criado da função construtora 'new Object', todo objeto possui um prototype herdado desse objeto pai.

Esses objetos, por padrão, não possuem seu próprio prototype, pois nada foi adicionado nele, apenas herdado da função construtora

## setPrototypeOf.

Assim como ja vimos que tem como criar um prototype, também podemos manipular de onde virá esse prototype, utilizando o *setPrototypeOf(z, x)*;

o *z* significa o objeto que vai receber esse prototype, e o *x* significa o objeto que será o prototype.

Ex.:

    function Macaco() {
        this.zuada = 'u u a a'
    }

    const obj = {
        animal: 'macaco',
        cor: 'marrom',
    }

    Object.getPrototypeOf(obj, Macaco);

Peguei o prototype do *new Object()* (que a constructor function 'Maccaco' herdou) e o coloquei no objeto criado

Porém, e se eu quiser colocar o prototype que eu criei na função 'Macaco'?

    function Macaco() {
        this.zuada = 'u u a a'
    }

    Macaco.prototype.mulé = 'macaca'

    const obj = {
        animal: 'macaco',
        cor: 'marrom',
    }

    Object.getPrototypeOf(obj, Macaco.prototype);

É uma diferença boba, que muda completamente o valor que está sendo recebido.

### Object.create

É uma forma diferente de criar um objeto, receber o prototype desejado nesse objeto, e criar e configurar suas propriedades

    function objetoCreate() {
        const obj = exemplo.prototype,{
            exemploValor1: {
                value: 'qualquer',
                configurable: false/true,
                writable: false/true,
                enumerable: false/true,
            }
            exemploValor2: {
                value: 'coisa',
                configurable: false/true,
                writable: false/true,
                enumerable: false/true,
            }
            E assim em diante.
        }
    }

(prototype que o obj vai receber , o objeto criado).

(as propriedades do obj tem que ser criadas, pois se não forem criadas, automaticamente são falsas)

DICA: Se for deixar uma propriedade falsa, é só não criar ela NESSE CASO, pois ela será setada como 'false' automaticamente
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


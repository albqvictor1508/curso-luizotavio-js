## Herança

A herança consiste em fazer com que um construtor herde o prototype de outro sem que sejam um instância do outro.

Ex.:

    function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    }

    Camisa.prototype = Object.create(Produto.prototype);

Dessa forma, a função Camisa, que era pra ser uma função construtora, acaba não sendo, pois não possue seu *constructor*, e sim o *constructor* da função *Produto*

## Obj.call

Consiste em linkar uma função a outra, ou seja, tudo que está na função que o método *call* está sendo usado, será colocado nessa função também.

Ex.:

    function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    }

    Produto.prototype.aumento = function(valor) {
        return this.preco += valor;
    }

    Produto.prototype.desconto = function(valor) {
        this.preco -= valor;
    }

    function Camisa(nome, preco, cor) {
        Produto.call(this, nome, preco);
    }

Ou seja, tanto o *prototype*, quanto suas *chaves* serão colocados dentro da função *Camisa*


### Problema

O problema disso é que além do prototype criado, o método *constructor* que está responsável por fazer uma função ser uma função construtora (que está associado à Produto) seja passada para *Camisa*.

Fazendo com que *Camisa* se torne uma instância de *Produto*, oque não era pra ocorrer

Solução:

    Camisa.prototype.constructor = Camisa;

Criando um *constructor* no prototype de *Camisa*, para que mesmo ela herdando de *Produto*, ela seja uma função construtora ao invés de uma instância de *Produto*

## Sobrescrever

É possível sobrescrever prototypes que foram criados pela função herdada.

Ex.:

    Produto.prototype.aumento = function(valor) {
    return this.preco += valor;
    }

    Camisa.prototype.aumento = function(per) {
    this.preco = this.preco + (this.preco * (per / 100))
    }

Assim o prototype *aumento* será alterado dentro da constructor function *Camisa*.



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

function Camisa(nome, preco, cor, textura) {
    Produto.call(this, nome, preco);
    this.cor = cor;
    this.textura = textura;
}

Camisa.prototype = Object.create(Produto.prototype);

Camisa.prototype.constructor = Camisa;
Camisa.prototype.aumento = function(per) {
    this.preco += (this.preco * (per / 100))
}

const camisa = new Camisa('oversided', 60, 'azul', 'algodão');
camisa.aumento(10);
console.log(camisa);

//camisa.__proto__ -> Camisa.prototype -> Produto.prototype -> Object.prototype

function Caneca(nome, preco, textura, cor, fonte) {
    Produto.call(this, nome, preco);
    this.textura = textura;
    this.cor = cor;
    this.fonte = fonte;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(per) {
    this.preco -= (this.preco * per / 100);
}

const caneco = new Caneca('canequinha', 20, 'shaders','preta');
caneco.desconto(20)
console.log(caneco);

//REVISAR ESSA AULA AMANHÃ
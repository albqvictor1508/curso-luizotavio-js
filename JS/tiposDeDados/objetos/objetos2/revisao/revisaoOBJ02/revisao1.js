function pessoa1(nome, sobrenome, idade) {
    const pessoa = {
        nome,
        sobrenome,
        idade,
    }


    const pessoa2 = Object.assign({}, pessoa)
    return pessoa2;
}

function criaPessoa() {
    const pessoa = pessoa1('alexsa', 'amor da minha vida', 16);
    console.log(pessoa);
}
criaPessoa();


function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.desconto = function(percentual) {
    const calculo = this.preco - (this.preco * percentual / 100);
    return calculo;
}

function Calça(preco, tamanho, cor) {
    Produtos.call(this, preco);
    this.tamanho = tamanho;
    this.cor = cor;
}

Calça.prototype = Produtos.prototype;
Calça.prototype.constructor = Calça;

Calça.prototype.desconto = function() {
    console.log('desconto é meu pau');
}

const criaProduto = () => {
    const calca = new Calça('calca',46,90, 'azul claro');
    calca.desconto()
}
criaProduto();
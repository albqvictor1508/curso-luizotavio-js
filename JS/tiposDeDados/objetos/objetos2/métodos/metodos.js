function criaProduto(nome,preço,validade) {
    return {
        nome,
        preço,
        validade,
        macaco() {
            console.log(`quem usa ${nome} é macaco`);
        }
    }
}

function produto1() {
    const produto = criaProduto('camisa', '35 reais', 'não tem');
    produto.macaco();
    console.log(Object.values(produto));
}

function produtoPorReferência() {
    const produto = criaProduto('calça', '70 kuanzas', 'tem não');
    const produtosReferencia = produto;
//Agora são ligados por referência, se mexer no valor de um, automaticamente muda o valor do outro.
produtosReferencia.nome = 'casaco';
console.log(produto);

}
produtoPorReferência();

function verPropriedadesProduto() {
    const produto = criaProduto('carro', '200 mil', '2 anos');

    Object.defineProperty(produto, 'preço', {
        value: '2 reais',
        writable: true,
        configurable: false,
    })

    console.log(Object.getOwnPropertyDescriptor(produto, 'preço'));
}
verPropriedadesProduto();



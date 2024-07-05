## Métodos úteis

Métodos já vistos:

    Object.keys() = mostra as chaves do objeto em um array.

    Object.freeze() = trava o valor de todo o objeto.

    Object.DefineProperty/Properties => permite configurar uma ou mais chaves dentro do objeto da forma que quiser

Outros Métodos:

    Object.values = mostra os valores do objeto em um array.

    Object.assign({}, obj) = copia o objeto selecionado e coloca em um objeto vazio(const obj = {...obj} => é uma forma muito mais fácil de fazer a mesma coisa).

    Object.getOwnPropertyDescriptor/Descriptors = permite ver as propriedades de qualquer chave em qualquer objeto.

    Object.entries = junção de 'values' e 'keys', coloca a chave e o valor juntos dentro de um array.

## Obs.:

    function produtoPorReferência() {
    const produto = criaProduto('calça', '70 kuanzas', 'tem não');
    const produtosReferencia = produto;
    //Agora são ligados por referência, se mexer no valor de um, automaticamente muda o valor do outro.
    produtosReferencia.nome = 'casaco';
    console.log(produto);

    }
    produtoPorReferência();

Para relembrar dos valores por referência.
# Primitivos e Referência

### Os tipos primitivos são imutáveis.

Ou seja, o valor poder ser substituido, mas não pode ser alterado.

    let a = 'CJ';
    let b = a;

Nesse caso o *b* copiará o *a*, mas as variáveis não possuem ligamento, então à medida que eu mude o valor do *a*, o *b* não será alterado junto, permanecerá com o primeiro valor imposto.

### Exemplos de Primitivos.

    string, number, boolen, undefined, null, bigInt e symbol.

### Os tipos por referência são mutáveis.

Oque significa que o valor dentro deles pode ser alterado ou substituido.

    let a = ['CJ', 'Mano Brown', 'Justin Bieber'];
    let b = a;

Diferentemente dos primitivos, essas variáveis terão conexão, ou seja, o valor que for adicionado no *a*, será adicionado no *b*, o mesmo vale o oposto.

### Exemplos de Referências.

    array, object, function.

### Conceitos adicionais sobre Referências

    let a = [1,2,3];
    let b = [...a];
    let c = b;

Dessa forma, o *b* não terá mais conexão com *a*, apenas copiará seu valor, mas o *c* terá conexão com o *b*
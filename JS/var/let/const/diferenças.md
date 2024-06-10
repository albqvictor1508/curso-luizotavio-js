# Declarações de variável

## Escopos

O primeiro princípio a se entender para diferenciar cada forma de declarar é seu escopo.

### De bloco

### De função

### Escopo Global

## Const

a mais diferente das 3, pois é uma constante, ou seja, seu valor não pode ser modificado de forma alguma <strong>se estiver no mesmo escopo.</strong> (pois se não estiverem em diferentes escopos, conta como se a variável nunca tivesse sido declarada.)

## Let

let possui escopo de bloco

o let e o var são muito parecidos, porém o let é mais seguro, pois o let <strong>não pode ser redeclarado no mesmo escopo.</strong>

Um exemplo:

    let victor = 'mizera'

    let victor = 'estudioso'

    retornaria um erro pois está sendo redeclarada.

Não significa q o valor não pode ser alterado, pois ele com certeza pode, mas sem redeclarar

    let victor = 'estudioso';

    victor = 'trocando o valor'

    Dessa forma, o valor seria trocado.

## Var

var possui escopo de função.

o menos recomendado de se usar, pois é o menos seguro, <strong>ja que pode ser redeclarado.</strong>

E isso pode causar problemas no seu sistemas por falta de um aviso de erro quando declarasse uma variável já existente por engano, já que o JS geralmente não exibe o erro na cara.

    var victor = 'estranho';

    var victor = 1508;

    Isso acontece muito por engano, oque pode prejudicar sua aplicação.

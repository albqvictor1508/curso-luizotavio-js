## Mais sobre arrays.

### Relembrando:

Os arrays são valores por referência, ou seja, que podem passar ou receber valores por referência.

    const carros = ['vectra', 'jetta', 'uno mille', 'gol'];

    const carrosRef = carros;

    Dessa forma, a variável 'carrosRef' recebe os valores de 'carros' por referência

Ou seja, oque for alterado em 'carros', vai ser alterado em 'carrosRef'

Porém, utilizando o spread operator(...) => que pode ser tanto rest quanto spread, depende do contexto, é possível acabar com essa referência.

Ex.:

    const moto = ['roda aro 15', 'carenagem de fan160', 'sem escape', 'sem placa'];

    const novaMoto = [...moto];

    novaMoto.pop();
    novaMoto.push('só ando certo')
    console.log('\n')
    console.log(novaMoto);
    console.log('\n')
    console.log(moto);

    Dessa forma, mesmo que 'novaMoto' tenha copiado 'moto', eles possuem valores totalmente diferentes.

### Pop

O pop é utilizado para remover o ultimo elemento de um array, porém, se salvo em uma variável, ele armazena o elemento que foi retirado, oque pode ser muito útil.

    const nomes = ['victor', 'alexsa', 'noah guinu'];

    const remover = nomes.pop();
    console.log(remover);

    (Saída: noah guinu);
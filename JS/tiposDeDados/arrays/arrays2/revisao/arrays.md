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

### Slice

Corta o iterável e cria um array com a parte que foi delimitada, que também pode ser armazenado em uma variável.

    const pessoas = ['major sidnei', 'michael jackson', 'xand avião', 'kendrick lamar'];

    const slice = pessoas.slice(0,3)

Os valores: 'major sidnei' , 'michael jackson' e 'xand avião' serão armazenados dentro de 'slice'

Slice também pode ser feito com números negativos, por exemplo:

    const slice = pessoas.slice(0,-1);

    Os mesmos valores serão cortados

### Split

A ideia é um pouco parecida com o slice, porém em vez de cortar o iterável, ele vai separar esse iterável em um array

    const nome = 'alexsa martins perfeita';

    const array = nome.split(' ');

Assim foi criado um array que coloca tudo que está entre espaço em um array.

(pode ser armazenado em uma variável ou não, assim como os outros)

### Join

Literalmente o contrário do split, ele tem a mesma sintaxe e serve pra juntar o array em uma string normal

    const nomes = ['alexsa', 'martins', 'deliciosa', 'perfeita'];

    const nome = nomes.join(' ');

Estou utilizando o mesmo espaço que foi usado pra separar, só que pra unir os valores em uma string.
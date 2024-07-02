## Splice

O splice é uma junção entre: <strong>pop, push, shift e unshift</strong>

    const nomes = ['Alexsa Martins', 'Victor Arruda', 'lexsa', 'vito', 'lucas montano'];

    const removidos = nomes.splice(4,1);

Dessa maneira, eu retiro do índice 4 um elemento

Como o 'splice' consegue remover mais de um elemento de uma vez, ele sempre retornará o elemento removido dentro de um array.

O splice também pode ser usado com números negativos

    const removidos = nomes.splice(-1, 1);

Dessa forma o elemento do indice 4 será removido também 

### Removendo mais de um elemento de uma vez.

    const motos = ['fazer 250', 'mt03', 'cg300', 'honda start 160', 'pop 110i'];

    const removidos = motos.splice(1,2);

Indica que apartir do índice 1 ele irá remover dois elementos.

(pode ser passado um número maior doque o tanto de elementos do array).

### Adicionando elementos

    const motos = ['fazer 250', 'mt03', 'cg300', 'honda start 160', 'pop 110i'];

    const removidos = motos.splice(1,0, 'honda twister 250', 'kawasaki ninja 300');

Dessa forma vai adicionar no array, em vez de passar esse valor para a própria variável

### Obs.:

Number.MAX_VALUE => o maior número possível no JS.
# Arrays

*supondo que o nome do array seja arr*

arr.length -> retorna quantos elementos o array possue 

arr.push e arr[arr.length] = valor-> adiciona um valor no final do array

arr.pop() -> retira o ultimo elemento do array

arr.unshit() -> adiciona um elemento no começo do array

arr.shift() -> retira o primeiro elemento do array

delete arr -> deleta o elemento, mas mantém o indice 

arr.slice(x, y) ->parte o array e retorna a parte que foi pedida.

 o (0, 3) funcionará como uma subtração, se colocar do (1, 5) por exemplo, só será exibido 4 elementos, (2, 5) = 3 elementos, e assim por diante.

 (igual o slice da string, mas por elemento ao invés de ser por letra)

 #### Para descobrir se é array ou não:

 (arr instanceof array)

 ## Atribuição via desestruturação

É simples de se fazer

    const array = ['victor', alexsa, '55', 18];
    const [primeiroNumero, segundoNumero] = array;

    console.log(primeiroNumero, segundoNumero)

As variáveis (primeiroNumero e segundoNumero) armazenarão os primeiros dados do array, se eu tivesse 3 ou mais variáveis ali, armazenarão 3 ou mais dados

Há, também uma forma de pegar o resto do array, ou seja, o que ficou sobrando

    const array = ['victor', alexsa, '55', 18];
    const [primeiroNumero, segundoNumero, ...resto] = array;

    console.log(primeiroNumero, segundoNumero);
    console.log(resto);

Com o atribuidor '...' o resto do array foi buscado, e logo em seguida ele será armazenado na variável resto


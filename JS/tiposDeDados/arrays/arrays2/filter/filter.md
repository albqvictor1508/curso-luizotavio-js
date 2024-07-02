## Filter

Usado para filtrar o Array (como o nome diz).

Filter sempre retorna um array com a mesma quantidade ou menos que o array original.

A função 'filter' precisa de uma função que a mostre oque vai filtrar, e essa função precisa retornar booleanos para que o filtro funcione, como nesse caso

Existe uma sequência de parâmetros identica ao ForEach.

1 parametro: valores;

2 parametro: indices;

3 parametro: array completo;

    const array = ['victor', 20, 32, 88, 1, 'ama', 19, 1508, 'alexsa'];

    const filtragem = array.filter(valor => {
        return !Number(valor);
    });

    (!Number(valor) retornará automaticamente um booleano que indica se é um número ou não).

Executará a função anônima e retornará tudo no array que não é um número

A função também pode ser passada por referência

    function Filtro(valor) {
        return !Number(valor);
    }

    const filtragem = array.filter(Filtro);

Dessa maneira funcionará da mesma forma.

## Funções part. 2

Todas as funções que são criadas com a palavra 'function' possuem uma variável dentro delas, chamada 'arguments', que armazena todos os argumentos passados para uma função, mesmo que ela tenha parâmetro ou não.

    function Argumentos() {
        console.log(arguments)
    }

    Argumentos('tio cuca beludo', 'pelé 2002', 'maradona cheiradasso')
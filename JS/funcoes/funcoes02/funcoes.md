# Mais sobre funções

## Oque são as funções.

As funções são 'First-class objects'(Objetos de primeira classe)


## Hoisting

O hoisting consiste em a engine do JavaScript elevar as funções e variáveis para o topo da execução.

Ex.:

    function bomDia() {
        console.log('bom dia!');
    }
    bomDia();
    -----------------------------------
    bomDia();

    function bomDia() {
        console.log('bom dia!');
    }

Mesmo que eu chame a função antes dela ser criada ou depois dela ser criada, ela vai ser executada do mesmo jeito.
 
<strong>Pois a engine do JS eleva essas funções para o topo da execução.</strong>


## Function Expression

É perfeitamente possível, não só em arrow functions, mas em todos os tipos de função, que uma função seja armazenada dentro de uma variável.

    const numero = function() {
        console.log('sou um número');
    }
    numero();

É algo muito interessante, pois já que a função ta salva em uma variável, essa variável pode ser usada como um parâmetro de outra função.

    const criaLi = function() {
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(funcao) {
        console.log('vou executar essa função que está sendo passada')
        funcao();
    }

    criaTarefa(criaLi);

Dessa forma, a função salva em uma variável vai ser armazenada no parãmetro da 'criaTarefa'.

## Arrow Function

A arrow function funciona quase como a função normal, com algumas diferenças, tanto em sintaxe, quanto em alguns atributos a mais.

### Sintaxe

É uma sintaxe simples, não muito diferente da função normal

A sintaxe basica funciona dessa forma:

    const divisao = (num1) => {
        return num1 \=;
    }

Mas pode ser simplificada:

(se só tiver um parâmetro, ele pode ser passado sem parenteses)

        const divisao = num1 => {
        return num1 \=;
    }

E se só tiver a linha de retorno na função, ela pode ser passada sem abrir chaves e sem colocar o return na frente

    const exibirNome = nome => console.log(nome);

Dessa forma, a função está retornando 'console.log(nome)' (nome = o argumento que for passado) 

Com dois parâmetro mais só a linha de retorno, pode ser escrita assim:

    const soma = (num1,num2) => num1 + num2



<strong>Todas elas podem ser chamadas manualmente, ou podem ser chamadas por outras funções, ou podem ser parâmetros para serem executadas por outras funções</strong> 

## Mais sobre funções

### Funções dentro de objetos.

As funções podem ser postas até dentro de objetos.

Ex.:

    const obj = {
        nome: 'alexsa',
        sobrenome: 'martins',
        depoimento: function() {
            console.log('meu depoimento');
        }
    }
    obj.depoimento();

Também pode ser feito dessa forma.

    const obj = {
        nome: 'alexsa',
        sobrenome: 'martins',
        depoimento() {
            console.log('meu depoimento');
        },
        
    }

    obj.depoimento();

Funciona da mesma forma
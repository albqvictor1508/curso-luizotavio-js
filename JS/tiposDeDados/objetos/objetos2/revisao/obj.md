## Revisão Objetos

Os objetos podem ser criados literalmente ou não.

as chaves do objeto podem ser chamadas pelo '.' ou pelo [''].

Exemplos.:

    (function criaObjeto() {
    const obj = {
        nome: 'victor',
        sobrenome: 'arruda ama alexsa',
    }
    chamaObjeto(obj);
    return obj;
    })();

    function chamaObjeto(obj) {
        console.log(obj.nome);
        console.log(obj['sobrenome'])

    }

    Dessas duas formas as chaves dentro do objeto podem ser chamadas.

## Salvar chaves.

Os objetos também podem armazenar as chaves em variáveis, porém só tem como utilizar essa forma usando a notação de colchetes para chamar a chave.

(forma de chamar => notação)

    (function salvaObjeto() {
        const obj = criaObjeto();
        const nomeObjeto = 'nome';
        const snObjeto = 'sobrenome';
        console.log(obj[nomeObjeto], obj[snObjeto]);
    })();

    Armazena o nome e o sobrenome em variáveis e chama a chave pela string que está salva dentro da variável

As duas notações possuem a mesma função, vai de caso a caso.

## Criar Objeto.

Existe formas de criar o objeto assim como o array.

Exemplo do array:

    const array = new Array(1, 2, 3 ,4)

    ou

    const array = [1,2,3,4]

    funciona igual

O objeto é da mesma forma.

Ex.:

    const objeto = new Object();
    objeto.cor = 'preto';
    objeto.tamanho = '200 metros';


    ou

    const objeto = {cor: 'preto', tamanho: '200 metros'}

    também faz a mesma coisa.

Quando um objeto é criado usando 'new Object()', ele perde aquela forma reduzida de criar um método, sendo obrigatório usar uma function expression

Ex.:

    const obegeto {
        falarNome() {

        }
    }
    Isso pode ser feito aqui

    const obegeto = new Object();
    obegeto.falarNome = function() {

    } 

    Mas aqui tem q ser assim.

## Percorrendo objetos

Enquanto no array, a estrutura de repetição percorre os indices, no objeto as chaves que são percorridas

Então nesse caso:

    for (let chave in obegeto) {
        console.log(chave);
    }

As chaves presentes nos objetos que serão exibidas.

        for (let chave in obegeto) {
        console.log(chave, obj[chave]);
    }

E se colocar em uma notação de colchetes(de '.' não pega),é possivel ver os valores dentro das chaves

(Quando funções estão postas dentro de objetos, são chamadas de 'métodos')

## Get e Set

Os dois se comportam para que um método se comporte como uma simples chave, para que seja mais simples e seguro trabalhar com esse método

    Get transforma o método em uma chave (atributo).

    Set permite alterar o valor desse atributo

Assim como é possível alterar os valores retornados dos métodos muito facilmente, mas o set faz com que a forma de alterar seja igual a de uma chave comum 

    falaNome() {
        console.log(`Seu nome é: ${obj.nome}`);
    }

Dessa forma, o objeto já mudaria o nome na medida em que o nome seja mudado no objeto

Mas usando o set, a forma de mudar esse valor fica igual a uma chave:

    obj.nome = 'victor'; (o set recebe o nome 'victor' e altera o valor);

## Travar valor.

Utilizando 'Object.freeze(objeto)', o valor contido nesse objeto é travado, ou seja, não pode ser alterado de maneira alguma

(TAMBÉM FUNCIONA PARA ARRAYS)

    const obegeto = {
        nome: 'alexsa',
        falarNome() {
            console.log('Seu nome é: ' + this.nome);
        }
    }

    Obect.freeze(obegeto);
    obegeto.nome = 'marcos';

Mesmo que eu tenha mudado o valor da chave 'nome', não vai ser alterado pois o valor recebeu um freeze q travou seu valor.

Também n pode ser criado mais nada dentro desse objeto, nem mesmo deletar um elemento.


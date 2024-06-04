# Objetos

### Sobre objetos

Os objetos não podem ser manipulados com 'push, pop, shift, unshift ou slice'

Ou seja, a única forma de alterar dados dentro de um objeto é uma função ou trocando manualmente esse objeto.

![alt text](image.png)

um objeto possui a mesma estrutura de um array, porém feito em chaves

E cada elemento posto possui um atributo, como um dado 

como por exemplo na constante obj, que possui o nome 'Alexsa', o sobrenome 'Martins' e a idade 16

foi criada essa arrow function que retorna um objeto com os argumentos lançados junto com a chamada da função 

    const funcaoObjeto = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,
    }

    }

também pode ser escrito dessa forma

<strong>Objetos podem conter funções, Assim como os arrays</strong>

funções que são criadas sem a palavra function e são utilizadas como um método

    const obj = {
        nome:'vito',
        sobrenome:'arruda'
        idade:17,

        teste() {
            console.log('pegou');
        }
    }
    obj.teste();

Mesmo que tenha como ser feito em arrays e objetos, geralmente não tem porque utilizar isso 
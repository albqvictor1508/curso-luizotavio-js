## Modules

Todo arquivo js é um modulo, e todo módulo é obrigatóriamente privado, ou seja, um arquivo js não pode acessar outro normalmente, mas ter somente um arquivo js atrapalharia muito o código pois seria dificil manter controle e manuntenção de tanta linha de código junta, por isso, é possível utilizar o:

Export/Import.

### Sintaxe

    import { exemplo } from "exemplo";

    export {exemplo};

com o Export, é como se você colocasse aquela constante, variável, função, classe, objeto, oque for, em um escopo global entre os módulos, em que eles podem importar para dentro deles

e com o Import você trás pro seu módulo oque está sendo exportado

Há 3 formas de exportar: 

EXEMPLOS.:

    export const nome = 'alexsa';

    const nome2 = 'vito';

    export {nome2};

    export default const sobrenome = 'martins dos santos';

O export pode ser tanto separado, quanto antes de se declarar

O export default indica que se no import não especificar oque vai ser importado, ou seja, não colocar o nome entre chaves doque vai ser exportado, irá exportar oque foi posto como default

Existem duas formas de se usar o default: 

    Uma pra funções, classes, entre outros: 

    export default class Pinto {

    }

    Outra para constantes, variáveis, entre outros: 

    const nome = 'vito';

    export {nome as default}

#### As

Para que problemas com componentes que possuam o mesmo nome que foi criado o As, ele funciona como foi mostrado no exemplo do default e funciona para que seja possível alterar aquele nome na hora de exportar ou na hora de importar (funciona no import e no export) 

#### * 

O * faz com que você importe tudo que foi exportado do arquivo solicitado, sem ter q digitar um por um, retornará um objeto com tudo que foi exportado e é obrigatório nomeá-lo com As.

    import * as Exemplo from "exemplo";

##### Mais

O import e export também pode importar outros arquivos como um arquivo css (que vai ser utilizado no webpack);


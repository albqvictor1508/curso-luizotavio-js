//SIMULANDO POP, PUSH, SHIFT E UNSHIFT.

const casas = ['minha casa', 'casa de lexsa', 'minha futura casa', 'final do array'];

const casas2 = ['minha casa', 'casa de lexsa', 'minha futura casa', 'final do array'];

const casas3 = ['minha casa', 'casa de lexsa', 'minha futura casa', 'final do array'];

const casas4 = ['minha casa', 'casa de lexsa', 'minha futura casa', 'final do array'];

const casasDestruídasPop = casas.splice(-1,1);
//tira 1 elemento do último índice (pop).

//utilizado na lista de tarefas 

const casasDestruídasShift = casas2.splice(0,1);
//tira um elemento no primeiro indice (shift)

const casasDestruídasUnshift = casas3.splice(0,0,'mansao');
//adiciona o elemento 'mansao' no primeiro indice (unshift)

//adicionado elemento no final do array (push)
const casasDestruídasPush = casas4.splice(casas4.length,0,'adicionado com push!');
console.log(casas);
console.log(casas2);
console.log(casas3);
console.log(casas4);


function Array() {
//constructor function
    this.array = ['eu', 'amo', 'alexsa'];
    this.splice = this.array.splice(0,0,'entenda')

    return this.array;
}

const depoimento = new Array();

console.log(depoimento);

function Array2() {
//factory function
    const array = ['agora', 'to', 'usando', 'factory', 'function'];
    return {
        splice: array.splice(0,0,'adicionei com splice!'),
        join: array.join(' ')
    }
}

const factory = Array2();
factory.splice;
console.log(factory.join);
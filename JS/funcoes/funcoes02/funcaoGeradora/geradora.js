function* gerador() {
    const nome = 'alexsa linda';
    yield nome;

    const nome2 = 'victor martins';
    yield nome2;

    const nome3 = 'alexsa arruda';
    yield nome3;
}
const gerado1 = gerador();

for(let valor of gerado1) {
    console.log(valor)
}

function* geradorInfinito() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}
const g2 = geradorInfinito()
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
//Devido à condição do while, essa função não tem fim

function* MandaTarefa() {
    yield 0;
    yield 1;
    yield 2;
}

function* recebeTarefa() {
    yield* MandaTarefa();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = recebeTarefa();

for(let valores of g3) {
    console.log(valores);
}

function* geraFunção() {
    yield function() {
        console.log('carro');
    }
    return function() {
        console.log('moto n vai aparecer');
    }
    yield function() {
        console.log('moto');
    }
}
const funcaoGerada = geraFunção();
console.log(funcaoGerada)
const funcao = funcaoGerada.next().value;
const funcao2 = funcaoGerada.next().value; //pegou o return e o segundo yield não vai ser lido enquanto tiver abaixo do return
funcao();
funcao2();

function* gerarObjeto() {
    const obj = {
        nome: 'victor',
        sobrenome: 'de lexsa',
    }
    yield obj;

    const obj2 = {
        nome: 'alexsa',
        sobrenome: 'de vito',
    }
    yield obj2;
}

const obegeto = gerarObjeto();


function* continuarObjeto() {
    yield* gerarObjeto();//continua os yields dessa função

    const obj3 = {
        nossoAmor: 'infinito',
        felicidade: 'nunca acabará',
        filhos: 'serão lindos'
    }
    yield obj3;
}
const obegeto2 = continuarObjeto();

for (let valor of obegeto2) {
    console.log(valor);
//vai exibir os valores das duas funções, pois com o 'yield*' elas foram mescladas
}

function* contas(x,y) {
    const soma = x + y;
    console.log('SOMA REALIZADA!')
    yield soma;

    const mult = x * y;
    console.log('MULT REALIZADA!');
    yield mult;

    const div = x / y;
    console.log('DIV REALIZADA!');
    yield div;
}

const numeros = contas(10, 10);
console.log(numeros.next())

for (let numero of numeros) {
    console.log(numero);
}

function* MEGAFUNCTION() {
    yield function() {
        const array = [1,2,3,4,5,'amo minha mulher!'];
        for (let valores of array) {
            console.log(valores);
        }
    }

    yield function() {
        const array2 = [2,3,4,5,6,'alexsa me ama!'];
        for (let values of array2) {
            console.log(values)
        }
    }
    
    yield function() {
        let incremento = 0;

        while(incremento < 10) {
            incremento++;
            console.log('bolsonaro melhor que lula ' + incremento); 
        }
    }
}
const armazenaMega = MEGAFUNCTION();
const funcaoMega1 = armazenaMega.next().value;
const funcaoMega2 = armazenaMega.next().value;
const funcaoMega3 = armazenaMega.next().value;
funcaoMega1();
funcaoMega2();
funcaoMega3();

//Dessa forma, é criado um gerador de funções

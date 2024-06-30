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
## Função geradora

### Estrutura

    function* gerador() {
        const nome = 'alexsa linda';
        yield nome;
        const nome2 = 'victor martins';
        yield nome2;
        const nome3 = 'alexsa arruda';
        yield nome3;
    }

    const gerado1 = gerador();
    console.log(gerado1.next());
    console.log(gerado1.next());
    console.log(gerado1.next());

Agora destrincharemos essa estrutura.

### Yield

Funciona como o return, porém em vez de sair da função ou daquele bloco, simplesmente da uma pausa nele.

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

    Dessa forma, eu consigo chamar os yields de outra função e continuar eles

E dessa forma eu posso armazenar funções nos yields:

    function* geraFunção() {
    yield function() {
        console.log('carro');
    }
    
    }
    const funcaoGerada = geraFunção();
    const funcao = funcaoGerada.next().value;
    funcao();

### Next

É usado para acessar oque foi gerado pela função, onde estará o seu 'value' e seu 'done'

A cada yield, o código .next() precisa ser repetido, ou seja, se eu quero acessar o ultimo yield e são 6 yields, preciso chamar o método next 6 vezes

#### Value

Value significa o valor que foi posto naquela pausa do código, como no return, onde podemos retornar um valor e sair do bloco, mas nesse caso retorna o valor e pausa a função.

    console.log(gerado1.next().value);

Exibe somente o valor.

#### Done

O 'done' indica se o gerador acabou, ou seja, enquanto não passar pelo ultimo yield, o valor será 'false' (obs.: passar, o done só reconhece q o gerador acabou quando a execução passa do yield)

    console.log(gerado1.next().done)

## Mais

É possível iterar sobre essa função

    for(let valor of gerado1) {
        console.log(valor)
    }
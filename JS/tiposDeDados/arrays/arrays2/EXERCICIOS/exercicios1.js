function Masterfunction() {
    this.array = [
        {num1: 10, num2: 20},
        {num1: 15, num2: 30},
        {num1: 30, num2: 40},
        {num1: 50, num2: 50},
        {num1: 1, num2: 1},
    ]
}

const duplicarMaster = () => {
    const master = new Masterfunction();
    const duplicar = master.array.map(valor => valor * 2)
    console.log(master);
}
duplicarMaster();

function ConcatEAlterarMaster() {
    const master = new Masterfunction();
    const array2 = [...master.array, 'vito arruda dev senior', 'array concatenado!'];//usando spread para copiar os valores em vez de usar a referência
    return {
        master: master,
        concat: array2,
        alterado: master.array.map((valor, index) => valor.num3 = index * 5),//adicionei uma nova chave no objeto por referência, mas usando o spread isso não ocorreria
    }
}

const objeto = ConcatEAlterarMaster();
console.log(objeto);

function criaArray() {
    const arrayzada = [1, 220, 30, 110, 52, 89, 11, 7, 49, 4, 5, 8, 15, 24, 32];
//se não retornar, vai dar undefined
    return arrayzada;
}

function filtrarArray() {
    const array = criaArray();
    console.log('\n');
    const filtragem = array.filter(valor => valor > 20);
    console.log(filtragem)
    mapArray(filtragem);
    return filtragem
// enviando para a função map juntar os dois parâmetros e chamar a função que concatena
}
filtrarArray();

function mapArray(filt) {
    const array = criaArray();
    console.log('\n');
    const map = array.map(valor => valor = 'amo alexsa');
    console.log(map);
    concatenarAtributos(filt,map);//juntando os dois parâmetros e chamando a função que concatena
}

function concatenarAtributos(filt, map) {
    const concat = map.concat(filt);
    const string = concat.join(' ');
    //concatenando o map com o filtro e juntando os elementos em uma string
    console.log(string);
    return concat;
}

function reduzirFiltro() {
    const atributos = filtrarArray();
    console.log(atributos);
    const total = atributos.reduce((soma, valor) => soma += valor);
    console.log(total);
    return atributos
}
reduzirFiltro();

function exibirPares() {
    const array = criaArray();
    const checar = array.reduce((ac, value) => {
        if (value % 2 === 0) ac.push(value);
        return ac;
    }, [])
    console.log('PARES CHECADOS ', checar)
}
exibirPares();

// Dessa maneira, todos os números pares serão armazenados em um array (prefiro usar o filter pra isso)

//FALTA SÓ O REDUCE


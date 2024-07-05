const criaProduto = (nome, preço, garantia) => {
    const produto = {
        nome,
        preço,
        garantia,
    };
    return produto;
}

function Entries() {
    const produto = criaProduto('moto', '17 mil', '1 ano e 5 meses');
    const separar = Object.entries(produto);
    DesestruturarEntries(separar);
    return separar;
}


function DesestruturarEntries(entries) {
    for(let [valor, chave] of entries) {
        console.log(valor, chave);
    }
}

function DesestruturarEntries2() {
    const entries = Entries();
    console.log('\n');
    for(let valor of entries) {
        console.log(valor);
        // OU PODE SER FEITO ASSIM.
        console.log(valor[0], valor[1]);
        //MOSTRARÁ IGUAL AO EXEMPLO DE CIMA
    }
}
DesestruturarEntries2()
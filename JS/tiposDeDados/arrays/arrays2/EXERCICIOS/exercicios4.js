function criaArray() {
    const array = [1,2,'victor',123,300,60,89,'ama', 70, 98, 200, 'alexsa martins'];
    return array;
}

function filtrarArray() {
    const array = criaArray();
    const filtrar = array.filter(valor => !Number(valor));
    console.log(filtrar);
    return filtrar
}

function percorrerArray() {
    const array = filtrarArray();
    const percorrer = array.forEach(valor => console.log(valor));
    (function fimdoArray() {
        console.log('FIM DO ARRAY!');
    })();
    return percorrer;
}
percorrerArray();

//utilizar mais de IIFE FUNCTIONS
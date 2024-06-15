const numeros = [1,2,3,4,5,6,7,8];

for (numero of numeros) {

    if (numero === 4) {
        break;
        const macaco = 'macaco';
        console.log(macaco)
    //O break sai do if e do for e não vai ser executado nem nada que for posto embaixo vai ser executado
    }

    if (numero === 2) {
        continue;
    }
    if (numero === 5) {
        continue;
    }
    if (numero === 7 || numero === 8) {
        continue;
    }
    console.log(numero);

}
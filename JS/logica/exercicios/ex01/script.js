function numerosMaior(num1, num2) {
    const maior = Math.max(num1, num2);
    return maior;
}

const numeros = numerosMaior(82,150);
console.log(numeros);


//OUTRAS FORMAS DE FAZER:

function maior(x,y) {
    if (x > y) {
    return x;
    }

    return y;

// Não precisa de um else pois se entrar no if já vai retornar x, e se não entrar vai retornar y;
}

console.log(maior(10, 20));

const bigger = (a,b) => a > b? a : b;

console.log(bigger(100,200))
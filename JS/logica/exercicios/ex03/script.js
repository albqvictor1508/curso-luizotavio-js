function divisoes(num) {
    if (!Number(num) || num > 100 || num.length === 0) {
        return 'ERRO!';
    }
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;
}

for (let cont = 0; cont <= 100; cont++) {
    console.log(cont, divisoes(cont));
}

//contador clássico para usar como parâmetros da função 'divisões'.
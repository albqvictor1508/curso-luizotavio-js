

//já que quando a condição é verdadeira, ela é executada e sai da condicional, qualquer condição que for verdadeira vai quebrar todas as outras condições 
const alexsa = 'victor';

if (alexsa > 0 && alexsa <= 10) {
    console.log('você está entre 1 e 10')
}
else if (alexsa > 10) {
    console.log('você ta maior que 10')
}
else {
    console.log('ERRO')
}

//algo óbvio mas que pode ser passado batido 

if (!alexsa) {
    console.log('macaco');
    return;
}

//esse return foi posto com o objetivo de parar a execução a partir daquele ponto

let victor = 'victor'

switch (victor) {
    case victor:
        console.log(`o valor é: ${victor} `)
        break
}
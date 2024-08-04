const aleatorio = (min,max) => Math.floor(Math.random() * (max - min) + min);

const LetrasMaiusculas = () => {
    const maiusculaAleatoria = aleatorio(65, 91);
    return String.fromCharCode(maiusculaAleatoria);
}


const LetrasMinusculas = () => {
    const minusculaAleatoria = aleatorio(97,123);
    return String.fromCharCode(minusculaAleatoria);
}


const Numeros = () => {
    const numAleatorio = aleatorio(48,58);
    return String.fromCharCode(numAleatorio);
}


const Simbolos = () => {
    const  totalSimbolos = ',.;~[]{}!@#$%¨&*()_+=-';    
    return totalSimbolos[aleatorio(0, totalSimbolos.length)];
    //logica importante para retornar um caracter dessa string, importante guardar
}


export default function geraSenha(qtd, maiusculas, minusculas, numeross, simboloss) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(LetrasMaiusculas())
        minusculas && senhaArray.push(LetrasMinusculas())
        numeross && senhaArray.push(Numeros())
        simboloss && senhaArray.push(Simbolos())
    }
    return senhaArray.join('').slice(0, qtd);
}



/*
Usa "String.fromCharCode()" para pegar um caracter na tabela ASCII, pegando dentro da tabela de onde começa até onde termina e colocando em uma função que retorna um valor aleatorio para escolher aleatoriamente qual caracter será retornado

E dentro de uma função que recebe esses caracteres, é colocado um for, que se repetirá o tanto de vezes que o input number pedir,e a cada repetição, a função que enviar um parametro verdadeiro será chamada

Criando assim um gerador de senha que pode ser configurado dessas 4 maneiras, que será posto em checkboxs do html
*/
# Switch

É geralmente utilizado quando queremos checar o valor de uma só variável por meio de condicional.

Promovendo uma estrutura que facilita a escrita 

![alt text](image.png)

dentro dos parênteses do switch entrará a variável

e dentro dos cases o seu valor e a condição que será executada caso tenha aquele valor.

Ex.:

    let victor = 'victor'

    switch (victor) {
    case victor:
        console.log(`o valor é: ${victor} `)
        break
    }

no final de todo case, <strong>é obrigatório um break</strong>. 

Caso não possua esse break, todos os casos serão executados de uma vez

### Break

Assim como o if e os else ifs possuem o else que pode ser usado como uma saída caso nenhuma das condições forem executadas

Utilizando o Switch dentro de um function, pode-se trocar o break por return.
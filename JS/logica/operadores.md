# Operadores 

## Operadores de Comparação

#### (utilizar os operadores estritos)

Ex.:
    
    certo: ===  errado: == 

    certo: !==  errado: !=

pois os <span style='color:green;'>estritos</span> analisam <strong>valor e tipo</strong>, já os <span style='color:red;'>não estritos</span> só analisam <strong>valor</strong>

    console.log(10 == '10')   
    true

    console.log(10 === '10')
    false

O mesmo vale para o sinal de diferente

## Operadores Lógicos 

![alt text](image.png)

Assim como era utilizado nas aulas de probabilidades

### && (e)

    10 + 10 === 20 && 20 - 10 === 10
    true 

Retorna 'true' pois os dois são verdadeiros, se um dos dois for falso, retornará 'false'.

    10 + 10 === 15 && 20 - 10 === 15
    false

As duas sentenças são falsas, então retorna false.

### || (ou)

    10 + 10 === 20 || 20 - 5 === 10
    true 

Retorna true pois um dos dois é verdadeiro, não é necessário que seja os dois, só é preciso que tenha um dos valores verdadeiros para ser considerado true.

    30 - 5 === 25 || 20 - 2 == 18
    true

Com os dois sendo verdadeiros, também retornará true, mas se n houver nenhum verdadeiro, será falso.

    30 - 5 === 20 || 20 - 5 === 15
    false

Pois as duas sequências são falsas.

### ! (não)
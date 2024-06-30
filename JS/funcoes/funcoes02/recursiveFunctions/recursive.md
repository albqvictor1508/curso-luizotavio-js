## Função recursiva

funciona exatamente como uma estrutura de repetição, só que em forma de função.

Existe um limite para a recursividade, quando chega nesse limite, a engine do JS para de executar

    function recursiva(contador) {
    if(contador >= 25) return;
    console.log(contador);
    contador++;
    recursiva(contador);
    }

    recursiva(2);

A função vai se chamar até que a condição do if seja executada (parecido com o while);

Se o console.log do parâmetro/variável ficar em cima do incremento, a função exibirá o contador desde o seu valor inicial.


function recursiva(contador) {
    if(contador > 25) return;
    console.log(contador);
    contador++;
    recursiva(contador);
}

recursiva(2);
//NÃO FUNCIONA SEM PARÂMETRO
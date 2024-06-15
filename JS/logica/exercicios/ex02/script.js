const ePaisagem = (larg,alt) => larg < alt;
//não é preciso de ternária nesse caso, pois essa operação de relação ja retornará automaticamente um booleano 

//Não precisa por em uma variável, pois não é preciso que esse dado seja armazenado, só retornado



console.log(ePaisagem(5000,2000));


/*
if (larg < alt) {
    return true;
}
return false;
*/
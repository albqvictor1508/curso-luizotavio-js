function criaObjeto() {
    const objeto = {
        nome: 'victor',
        sobrenome: 'de lexsa!',
    }
    objeto.nome = 'vito arruda'
    chamaObjeto(objeto);
    return objeto;
}

function chamaObjeto(obj) {
    console.log(obj.nome);
    console.log(obj['sobrenome'])

}

(function salvaObjeto() {
    const obj = criaObjeto();
    const nomeObjeto = 'nome';
    const snObjeto = 'sobrenome';
    console.log(obj[nomeObjeto], obj[snObjeto]);
})();

function criaObjeto2() {
    const obj = new Object();
    obj.cor = 'preto';
    obj.tamanho = '200 metros';
    obj.falar = function() {
        console.log(`O objeto é ${obj.cor}`)
        return '';
    }
    console.log(obj.cor , obj['tamanho']);
    return obj;
//outra forma de criar objeto
}

function deletandoChave() {
    const obj = criaObjeto2();
    //const deletar = delete obj.cor;
    obj.falar();
} 
deletandoChave();





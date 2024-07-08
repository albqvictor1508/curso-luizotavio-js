function Cavalo() {
    this.cor = 'marrom';
    this.peso = 'gordo';
    this.pelo = 'peludão';
    this.preço = '2000 reais';
    }
Cavalo.prototype.Desconto = function() {
    return 'mzr';
}

function Abelha() {
    this.cor = 'amarela e preta';
}
Abelha.prototype.fala = function() {
    return `possui as cores: ${this.cor}!`
}

function Pato() {
    this.animal = 'pato',
    this.zuada = 'quen quen'
}

function criaObjeto() {
    const obj1 = {
        animal: 'cavalo',
    }

    const obj2 = {
        animal: 'abelha',
    }
    const obj3 = new Object();
    obj3.animal = 'pato';
    obj3.cor = 'amarellow';
    obj3.sexo = 'não pratica';
    
    //Dessa forma, estou pegando o prototype da função 'Cavalo' e a colocando dentro do objeto 'obj1'
    Object.setPrototypeOf(obj1, Cavalo.prototype);
    Object.setPrototypeOf(obj2, Abelha.prototype);

    console.log(obj2);
    console.log(obj1);

    return obj3;
}

const criaObjeto2 = () => {
    const obj = criaObjeto();
    const obj4 = Object.create(obj, Pato.prototype);
    console.log(obj4);
}
criaObjeto2();


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
//prototype q o obj vai receber , o objeto criado

//a propriedades do obj tem que ser criadas
    const obj4 = Object.create(Pato.prototype, {
        zuada: {
            value: 'quen quen',
            configurable: false,
            writable: true,
            enumerable: true,
        },
        marida: {
            value: 'a pata',
            configurable: false,
            writable: false,
            enumerable: true,
        },

    });
    obj4.marida = 'vito';
    
    Object.defineProperty(obj4, 'zuada', {
        value: 'quen quen quen',
        writable: true,
    })
    console.log(obj4);
    return obj4;
}
criaObjeto2();

const criaObjetos3 = () => {
    const obj = criaObjeto2();
    const Obigeto = Object.create(obj, {
        obigetão: {
            value: 'um obigeto',
            writable: true,
            enumerable: true,
        }

    })
    console.log(Obigeto);

    const MEGAOBJETO = new Object();
    MEGAOBJETO.nome = 'MEGA',
    MEGAOBJETO.sobrenome = 'OBJETO',
    MEGAOBJETO.cor = 'MEGA';

    Object.setPrototypeOf(MEGAOBJETO, obj);
    console.log(MEGAOBJETO);

}   

const obbejeto = Object.create(Abelha.prototype, {
    NovoObjeto: {
        value: 'Sou um novo obegeto',
        enumerable: true,
        writable: true,
    }
})
criaObjetos3();
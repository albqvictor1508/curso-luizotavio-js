function criaObjetos() {
    const obj1 = {
        chave: 'Eu sou a chave do primeiro obj!',
    }

    const obj2 = {
        chave: 'Sou o segundo objeto!',
    }
    Object.setPrototypeOf(obj2, obj1);
//Além do prototype herdado, também possui o *obj1* como prototype

    const obj3 = new Object();
    obj3.chave = 'Sou o terceiro objeto!';
    obj3.unico = 'Sou o unico criado com new Object()';

    Object.setPrototypeOf(obj3, obj2);
//Além do prototype herdado e o prototype do *obj2*, eu ainda recebo o prototype do *obj1*.

    console.dir(obj1);
    console.dir(obj2);
    console.dir(obj3);

}
criaObjetos();
const obj = {nome:'Alexsa', sobrenome:'Martins',idade:16,nascimento:15082007}


console.log(obj);

//OBJETOS NÃO PODEM SER MANIPULADOS COM PUSH, POP, SHIFT OU UNSHIFT

//FUNCTION QUE RETORNA OBJETO

const funcaoObjeto = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,


    }
}

//Assim como no array precisa de uma virgula no final do elemento, no objeto também precisa 

console.log(funcaoObjeto('victor', 'albuquerque', 17))
console.log(funcaoObjeto('alexsa', 'martins', '16 anos'))
console.log(funcaoObjeto('lula', 'da silva', 'não sei'))
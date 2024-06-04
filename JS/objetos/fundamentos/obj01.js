const obj = {nome:'Alexsa', sobrenome:'Martins',idade:16,nascimento:15082007}


//console.log(obj);

//OBJETOS NÃO PODEM SER MANIPULADOS COM PUSH, POP, SHIFT OU UNSHIFT

//FUNCTION QUE RETORNA OBJETO

const funcaoObjeto = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,
    
        }
    }


const objetin = {
    nome:'vito',
    sobrenome:'arruda',
    idade:16,

    teste() {
       console.log(`${this.nome} de sobrenome ${this.sobrenome}, de ${this.idade} anos`);
    }
}
//Assim como no array precisa de uma virgula no final do elemento, no objeto também precisa 

//Dentro de uma função podem ser puxados os dados do objeto usando 'this.dado'
objetin.teste();

//console.log(funcaoObjeto('victor', 'albuquerque', 17))
//console.log(funcaoObjeto('alexsa', 'martins', '16 anos'))
//console.log(funcaoObjeto('lula', 'da silva', 'não sei'))
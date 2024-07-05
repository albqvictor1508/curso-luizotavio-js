function criaObjeto1() {
    const obj = {cor: 'amarelo', peso: '70kg', status: 'liso', saúde: 'nenhuma'};
    return obj;
}

function criaObjeto2() {
    const obj = new Object();
    obj.cor = 'amarelo';
    obj.peso = '70kg';
    obj.status = 'liso';
    obj.saúde = 'nenhuma';
    obj.idade = '51 anos';
    obj.falarCor = function() {
        console.log(`A cor é ${this.cor}`);
    }
    obj.dataAtual = function() {
        const data = new Date();
        const ano = data.getFullYear();
        const transformar = this.idade.split(' ');
        const idade = Number(transformar.splice(0,1));
        if (!idade) return 'sai macaco';
        const nascimento = ano - idade;
        return `você nasceu em ${nascimento}`;
    }
//Dessa forma, tem q ser criada uma função expression, diferente da outra forma q é só colocar a função entre parênteses.
    return obj;
};

function CriaObjeto3(nome, sn, idade, cor, amor) {
    this.nome = nome;
    this.sobrenome = sn;
    this.idade = idade;
    this.cor = cor;
    this.amor = amor;
//cria um objeto vazio e adiciona nele essas chaves e valores.

//tem o 'this' para se referir a diferentes pessoas (as variáveis que conterem esse objeto)
}

function AlterarObjeto() {
    const obj = criaObjeto1();
    obj.peso = '92kg';
    obj.status = 'rico e casado';
//Dessa forma é possivel alterar o valor em uma chave nas duas formas de criar objeto.
    console.log(obj);
}

function ChamarMetodos() {
    const obj = criaObjeto2();
    obj.falarCor();
    console.log('\n');
    console.log(obj.dataAtual());
    
}

function percorrerObj() {
    const obj = criaObjeto2();
    for (let chaves in obj) {
        console.log(chaves, obj[chaves]);
    }
}

function criaPessoa() {
    const pessoa = new CriaObjeto3('VICTOR','ARRUDA', '17 ANOS', 'BRANCO', 'ALEXSA MARTINS');
//Criando uma função que cria um objeto com os parâmetros que forem passados (oque também pode ser feito com factory function)
    console.log(pessoa);
}
criaPessoa();




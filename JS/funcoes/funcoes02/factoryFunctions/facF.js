const retornaObj = (nome, sobrenome, peso, altura) => {
    return {
        nome,
        sobrenome,
        // Getter (faz a função funcionar como um atributo/uma chave)
        // para que o dado dentro da função getter possa ser alterado, é preciso de um 'setter'
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter (permite a alteração do valor dentro de um atributo/chave (getter) )
        // todo setter só pode ter 1 parâmetro e é obrigatório ter
        //não pode ser usado ...(rest operator)
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');//pega o resto dos nomes do array e os transforma em string novamente com um espaço entre cada dado.
        },
        idade(idade) {
            return `${idade} anos`;
        },
        peso,
        altura,
        get imc() {
            const calculo = this.peso / (this.altura ** 2);
            return calculo.toFixed(0);
        },

        get retornaTudo() {
            return `${this.nome} ${this.sobrenome} tem ${this.idade(17)}, pesa ${this.peso}, tem ${this.altura} de altura e seu IMC é de ${this.imc}`;

        },
    //colocando get do lado antes da função, ela vai passar a se comportar como um método do objeto, deixando de ser executada como uma função
    }
}
const objeto1 = retornaObj('vito', 'arruda de lexsa', 75, 1.70);
const objeto2 = retornaObj('lexsa', 'martins de vito', 56, 1.70);
//o objeto retornado é salvo nessa variável    
objeto1.nomeCompleto = `vito arruda`;
objeto1.nomeCompleto = `luis inácio lula da silva`;
objeto1.nomeCompleto = 'vito arruda come alexsa gostoso';
console.log(objeto1.nomeCompleto);
console.log(objeto2.nomeCompleto);
//e com essa variável que o objeto é acessado
//console.log(objeto.retornaTudo);
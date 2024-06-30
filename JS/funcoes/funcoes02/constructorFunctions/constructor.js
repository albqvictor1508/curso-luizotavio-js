function Carro(carro, roda, cavalos) {
    this.carro = carro;
    this.roda = roda
    this.cavalos = cavalos;
}

const c1 = new Carro('renegade', 'aro 10', '-2k cavalos');
//console.log(c1);

//SEM USAR PARÂMETROS

function Pessoa() {
// variáveis podem ser criadas aqui dentro, mas são exclusivas daqui de dentro.
    this.nome = 'alexsa gostosa';

    this.idade = '16 novinha delicia';

    this.sobrenome = 'martins dos santos ama muito victor';
    
    this.amor = function() {
        console.log('MÉTODO DENTRO DA FUNCAO CONSTRUTORA: eu amo victor!');
    }
}

const alexsa = new Pessoa();
console.log(alexsa);
console.log('\n')
alexsa.amor();

//funciona como a factory, porém automatizada
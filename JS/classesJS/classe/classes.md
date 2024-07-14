## Classes 

A classe é muito mais fácil de utilizar doque a constructor e a factory function para criar objetos e prototypes!

Pois as funções colocadas dentro da classe automaticamente vão pro prototype do objeto que vai ser instanciado

Diferentemente da constructor function que tinha que fazer na mão e da factory function que tinha que criar o objeto em uma constante e retornar um objeto vazio com essa constante como seu prototype(uma gambiarra)

Exemplo de Classe:

    class Pinto {
    constructor(tamanho, endurecimento) {
        this.tamanho = tamanho + 'cm';
        this.endurecimento = endurecimento;
    }

    pinto() {
        console.log('pinto');
    }

    get gozar() {
        console.log('gozei');
    }
    set gozar(valor) {
        if(valor !== 'lexsa') {
            console.log('não gozei');
            return;
        }
        console.log('GOZEI ABSURDO');
    }

    }

    function criaPinto() {
        const pinto = new Pinto(16, 'muuuito duro');

        console.log(pinto)
        pinto.pinto();
        pinto.gozar = 'lexsa';
    }
    criaPinto();

Exemplo de Classe com prototype definido automaticamente pelas funções e getter e setter
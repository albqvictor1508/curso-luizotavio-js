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
    const pinto2 = new Pinto(17, 'muuuito duro');
    const pinto3 = new Pinto(18, 'MOLE');
    const pinto4 = new Pinto(16, 'mei mole');
    const pinto5 = new Pinto(35, 'muuuito duro');

    console.log(pinto)
    pinto.pinto();
    pinto.gozar = 'lexsa';
}
criaPinto();
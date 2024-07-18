const criaTempo = (min = 0,max = 3) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function criaRotina(rotina, tempo) {
    return new Promise((resolve,reject) => {
        if(typeof rotina !== 'string') reject('pode só string no baguio pai');
        if(rotina.length > 50) reject('diminui isso ai porra');
        setTimeout(() => resolve(rotina), tempo);
        //obrigatoriamente precisa ser um setTimeOut

        //resolve tem que ser passado em uma função de callback
    })
}

async function alexsa() {
    try {
        const escola = await criaRotina(`me arrumo e vou pra escola`,criaTempo());
        console.log(escola);

        const prova = await criaRotina(`faço prova na escola`, criaTempo());
        console.log(prova);

        const casa = await criaRotina(`volto pra casa e arrumo maria e a casa`, criaTempo());
        console.log(casa);
        const treinar = await criaRotina(`vou treinar com meu amor`, criaTempo());
        console.log(treinar);

        const cilio = await criaRotina(`vou ajeitar meus cilio`, criaTempo());
        console.log(cilio);
        
        const erro2 = await criaRotina('acvbnmjkloiiuyhgtrfdewsaqwsderfgtyhjtgyuhjjghjghjghjhguytyytuttyu', criaTempo());
        console.log(erro2);
        const erro1 = await criaRotina(4234234234, criaTempo());
        console.log(erro1);
    } catch(erro) {
        console.log(erro);
    }
}
alexsa();
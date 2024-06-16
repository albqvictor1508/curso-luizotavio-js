function Hora(data) {
    if (data && !(data instanceof Date)) {
        //istanceof Date: faz parte de data, está dentro de data
        throw new TypeError('Tipo esperado: Date.')
        //caso o parâmetro passado não for uma instância de hora, o erro será lançado 
    }
//instance of: que faz parte, que está dentro

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        
    })
}

try {
//Executará esse bloco de código até que um erro seja encontrado.

    console.log(Hora());

} catch (erro) {
//Executará esse bloco quando houver um erro
    console.log(erro);
} finally {
//Sempre vai executar, independente de ter erro ou não
    console.log('Boa noite!');
}




function relogio() {
    const data = new Date();
    return data.toLocaleString('pt-BR',{
        hour12: false,
    })
}

//como o nome ja diz, setInterval dá um intervalo de tempo para aquela função ficar sendo executada, por exemplo: de 1 em 1 segundo, de 5 em 5 segundos, em diante

//O tempo no setInterval é dado em milisegundos(ms).

//pode-se tanto criar uma função normal e colocar ela aqui por referência, tanto criar uma função anônima

const temporizador = setInterval(function() {
    console.log(relogio())
}, 1000);

//Jogando o setInterval em uma variável, é possivel utilizar o setTimeout

setTimeout(function() {
    clearInterval(temporizador);
    console.log('tenha um bom dia!')
}, 7000);
//dessa forma, quando passar 7 segundos, o setTimeout terminará a execução do setInterval

setTimeout(function() {
    console.log('\nOutro timeout')
},10000)

//A execução do código só terminará quando esse ultimo timeout for executado.

//E se eu colocar outro timeout, só vai terminar quando ele for executado.

//setInterval executa infinitamente naquele intervalo de tempo, setTimeout só executa uma vez

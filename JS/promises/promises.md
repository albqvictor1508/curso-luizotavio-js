## Promises

As promises são formas melhores doque o callback para lidar com a sequência de execução das funções, geralmente assíncronas, podendo até tratar de erros com facilidade e deixando o código mais legível

A promisse recebe apenas dois parâmetros, um que executa oque for pedido, outro que encontra e trata erros

(Pode chamá-los do nome que quiser, geralmente é utilizado 'resolve' e 'reject', então é recomendado usá-los)

Quando usar o resolve, é preciso do *then()*

Quando usar o reject, é preciso do *catch()*

Um exemplo de callback:

    FAZENDO COM CALLBACK

    FuncoesASerExecutadas('levei alexsa na escola', NumAleatorio(1,3), () => {
        FuncoesASerExecutadas('to codando', NumAleatorio(1,3), () => {
            FuncoesASerExecutadas('vou trabalhar jajá', NumAleatorio(1,3), () => {
                FuncoesASerExecutadas('e vou lavar a moto hoje', NumAleatorio(1,3), () => {
                    console.log();
                    console.log('fim do callback!');
                })
            })
        })
    })

    DESSA FORMA, O CÓDIGO FICA HORROROSO DE FEIO E DESORGANIZADO



Agora um exemplo fazendo com promise

    FuncoesASerExecutadas('levei alexsa na escola', NumAleatorio(1,3))
    .then(tarefa => {
        console.log(tarefa);

    return FuncoesASerExecutadas('to codando', NumAleatorio(1,3));
    }).then(tarefa2 => {
        console.log(tarefa2);

    return FuncoesASerExecutadas('vou trabalhar jajá', NumAleatorio(1,3));
    }).then(tarefa3 => {
        console.log(tarefa3);

    return FuncoesASerExecutadas('e vou lavar a moto hoje', NumAleatorio(1,3));
    }).then(tarefa4 => {
        console.log(tarefa4);
    
    return FuncoesASerExecutadas('1231312', NumAleatorio(1,3))
    }).then(() => {
        console.log();
        console.log('fim da promisse')
    }).catch(e => {
        console.log(e);
    });

Uma forma bem mais organizada de sequenciar e tratar os erros da função assíncrona
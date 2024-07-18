## Funções Assíncronas

A função assíncrona funciona assim como a função de callback e a promisse, permite criar uma ordem de execução, criando organização e tratamento melhor de erros entre funções mais demoradas e funções mais rápidas

Os 3 conceitos dependem um do outro.

![alt text](image.png)

para a função assíncrona funcionar, é necessário uma promise, para a promisse funcionar, é preciso de uma callback function dentro do setTimeout

### Sintaxe 

Para a função assíncrona funcionar, é obrigatório ter a palavra *async* antes da função.

    async function() {

    }

    Dessa forma

E dentro da função assíncrona, tudo que vai ser executado em sequencia precisa estar em uma variável e receber a palavra *await* antes do valor

async function() {
    const tarefa1 = await setTimeOut('TAREFA', 2000);
}

Dessa maneira, tudo que estiver com a palavra await, vai obedecer a sequência de execução

### Problema

A função assincrona não capta nem trata erros, porém, da pra fazer uma gambiarra com o try catch que vai funcionar perfeitamente

    async function() {
        try {
            const tarefa1 = await sfkfgdfg

        } catch(erro) {
            console.log(erro);
        }
    }

Fazendo com que fique mais simples de fazer e de ler doque uma cadeia de promisses ou uma cadeia de callback functions

## OBS

Não indica que a função assíncrona vai ser a que vai caber melhor pra todos os casos, é bom ir de situação e situação pra usar ou somente a promisse, ou a async function
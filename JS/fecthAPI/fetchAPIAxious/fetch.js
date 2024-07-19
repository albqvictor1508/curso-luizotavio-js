fetch('pessoas.json')
.then(resposta => resposta.json())
.then(pessoas => console.log(pessoas))
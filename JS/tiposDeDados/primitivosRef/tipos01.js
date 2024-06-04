const a = {
    nome:'Alexsa',
    fato:'Alexsa é perfeita,'
}
let b = a;

a.fato = 'alexsa é muito perfeita'
console.log(b)

//tipo por referência

//mas com esse sinal, o b remove a conexão e só copia os dados de a

b = {...a}

a.nome = 'alexsa martins'
console.log('a:', a, 'e agora b:', b)

//Dessa maneira, 'a' terá 'nome: alexsa martins' e 'b' terá 'nome: Alexsa'





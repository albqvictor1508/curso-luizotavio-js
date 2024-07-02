const lexsa = ['alexsa', 'martins', 'dos', 'santos'];

console.log(lexsa);
lexsa[1] = 'arruda';

console.log('MODIFICADO: '+ lexsa);

delete lexsa[3];//remover dado sem remover o índice.
console.log(lexsa);

const lexsa2 = new Array('vito', 'arruda', 'de', 'lexsa'); // outra forma de criar array que não muda nada

const arrayLexsa = lexsa2;
arrayLexsa.pop();//apaga nas duas variáveis por possuirem referência
console.log(arrayLexsa, lexsa2);

const moto = ['roda aro 15', 'carenagem de fan160', 'sem escape', 'sem placa'];

const novaMoto = [...moto];

novaMoto.pop();
novaMoto.push('só ando certo')
console.log('\n')
console.log(novaMoto);
console.log('\n')
console.log(moto);
//AGORA CADA UM POSSUI O SEU VALOR, MESMO QUE O VALOR DE 'NOVAMOTO' TINHA SIDO PEGO DE 'MOTO';

const pessoas = ['victor', 'alexsa', 'joseana', 'maria livia', 'testando'];

const casal = pessoas.slice(0,3);
console.log('\n');
console.log(casal);

const pessoas2 = ['major sidnei', 'michael jackson', 'xand avião', 'kendrick lamar'];

const slice = pessoas2.slice(0,-1);

console.log(slice);
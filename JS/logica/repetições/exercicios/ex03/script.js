let nome = prompt('Digite seu nome:');
let idade = prompt('Digite sua idade:');
let salario = prompt('Digite seu salário');
let sexo = prompt('Digite seu sexo:');
let estadoCivil = prompt('Digite seu estado civil:');

while (nome.length < 3 && idade < 0 || idade > 150 && salario < 0 && sexo !== 'masculino' || 'feminino' && estadoCivil !== 'solteiro' || 'casado') {
    alert('ERRO!')
    nome = prompt('Digite seu nome:');
    idade = prompt('Digite sua idade:');
    salario = prompt('Digite seu salário');
    sexo = prompt('Digite seu sexo:');
    estadoCivil = prompt('Digite seu estado civil:');

}
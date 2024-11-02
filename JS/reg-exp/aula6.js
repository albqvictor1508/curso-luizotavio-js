/* 
  ^ => dentro do conjunto significa negação, mas no começo da regex significa que a regex começa com esse valor

  $ => o dolar significa que termina com esse valor

  m => multiline

  Sem m: ^ e $ consideram todo o texto como uma única string
  Com m: ^ e $ funcionam linha por linha, permitindo matches em múltiplas linhas
*/

for(let i = 0; i < 10; i++)  {
  const cpf = `${i}${i}${i}.${i}${i}${i}.${i}${i}${i}-${i}${i}
  ${i}${i}${i}.${i}${i}${i}.${i}${i}${i}-${i}${i}`;

  console.log(cpf, cpf.match(/^[\d]{3}\.[\d]{3}.[\d]{3}-[\d]{2}$/gm));
}
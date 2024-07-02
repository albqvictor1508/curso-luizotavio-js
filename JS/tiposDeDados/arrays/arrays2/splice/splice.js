const nomes = ['Alexsa Martins', 'Victor Arruda', 'lexsa', 'vito', 'lucas montano'];

const removidos = nomes.splice(4,1);

console.log(removidos);

const motos = ['fazer 250', 'mt03', 'cg300', 'honda start 160', 'pop 110i'];

let removidos2 = motos.splice(1,0, 'honda twister 250', 'kawasaki ninja', 'biz 110 2024');

removidos2 = motos.splice(2,6, 'fim das motos!');
//apartir do indice 2 (terceiro elemento) foram removidos 6 elementos e o elemento 'fim das motos!' foi posto no indice 2.



console.log(motos, removidos2);
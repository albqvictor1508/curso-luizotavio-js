//(g) => global (encontre todas as ocorrências);
//(i) => insensitive (independente de maiuscula ou minuscula, vai encontrar)
// | => ou (faz a mesma coisa do ||(ou))
// () => group (podendo agrupar as palavras encontradas)

const ex1 = /(joao|marcelo)( doesn't hide it)/i;

const {text} = require("./base");
const found = ex1.exec(text)

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);
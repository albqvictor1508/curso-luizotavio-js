/* 
  Greedy e Non-Greedy

  Greedy: ele vai capturar o máximo possível, ou seja, ele vai pegar do primeiro fechamento de tag do texto até o ultimo fechamento de tag, ou seja, do primeiro "<p>" até o ultimo "</p>" (como a espressão foi ".+" seria qualquer tag e não especificadamente o p);

  Non-Greedy: Já o non-greedy é justamente o oposto, ele vai capturar o mínimo possível, ou seja, nesse caso, do primeiro "p" até o primeiro "/p", e ele só tem uma diferença, o quantificador "?" nos locais que eu quero q se comportem como non-greedy.
*/

const {html} = require("./base");

const greedy = html.match(/<.+>.+<.+>/g);
console.log(greedy);

const nonGreedy = html.match(/<.+?>.+?<.+?>/g);
console.log(nonGreedy);

//enquanto o greedy considerou tudo 1 elemento só, o non-greedy separou os p's
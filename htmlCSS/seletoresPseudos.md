## Seletores CSS

com o "+" no seletor, pode-se adicionar elementos que são irmãos junto com o elemento que está sendo selecionado.

section + h1 + p {

}

*(esse seletor adicionará os comandos às tags irmãs)*

<strong>*pode ser utilizado como um teste lógico*</strong>

Ex.

input:checked + p {
    background-color: black;
    color: white;
}

<strong>Enquanto o input estiver marcado, o *p* recebe um cor de fundo preto e a cor da fonte muda para branca</strong>

<strong>*Se esse teste lógico fosse realizado com o seletor "~", selecionaria todos os elementos que são irmãos do input:checked*</strong>

com o "~" no seletor, marca-se todos os elementos que possuem aquela classe 

section h1 ~ p {

}

selecionará todas as tags "h1" e todas as tags "p"

 <strong>*atributos podem ser criados no html e serem selecionados no CSS*</strong>

[atributo] {

}

colocando o atributo entre aspas é possivel editá-lo

Ex:

[checked] {

}

não recomendado pois é melhor estilizar utilizando pseudo-classes pseudo-elementos

## Pseudo-Classes

<strong>:active</strong>, estiliza quando usuário clicar

<strong>:hover</strong>, estiliza quando usuário passar o mouse

<strong>:visited</strong>, alterar estilo de links ja visitados

<strong>:link</strong>, alterar estilo de links que nunca foram visitados

<strong>:focus</strong>, dá estilo ao elemento que estiver em foco(geralmente usado em inputs)

<strong>:disabled</strong>, estiliza elemento desabilitado (geralmente utilizado em inputs)

<strong>:enabled</strong>, estiliza elemento habilitado (geralmente usado em inputs)

<strong>:checked ou unchecked,</strong> estiliza elemento marcado e desmarcado (usado em checkbox e radio)

<strong>:first-child</strong>, seleciona o primeiro elemento filho 

<strong>:last-child</strong>, seleciona o ultimo elemento filho

<strong>:required</strong>, estiliza o elemento que possui o atributo "required"

<strong>:root</strong>, funciona como uma variável, armazena dados para serem utilizados posteriormente

<strong>:not(),</strong> excluir um elemento do seletor, fazendo com que altere o estilo de todos os elementos no seletor, menos o que foi colocado entre os parenteses

além de excluir, também pode adicionar estilo ao elemento colocado entre parenteses

Ex:

not(:hover)

not(:checked)

<strong>:nth-child(2n)</strong>

*adicionar estilo ao passo de 2 em 2*

nth-child(even) -> par

nth-child(odd) -> impar

(geralmente utilizado em tabelas no efeito zebrado)

## Pseudo-Elementos

::after, estiliza ou adiciona um elemento após o conteúdo

::before, estiliza ou adiciona um elemento antes do conteúdo

::first-letter, adiciona estilo à primeira letra

::first-line, adiciona estilo à primeira linha

::selection, adiciona estilo ao que é selecionado pelo mouse 

::placeholder, adiciona estilo ao placeholder dos inputs

(pode selecionar o placeholder sem selecionar o elemento em si, marcando todos os placeholders)

## Especificidade 

ID -> Classes, atributos, pseudo-classes -> Elementos e pseudo-elementos







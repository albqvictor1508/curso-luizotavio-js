## FlexBox

exemplos muito didáticos e de fácil tradução no site do MDN

Align-content != align-items != align-self

(possuem os mesmos valores, mas fazem alinhamentos diferentes)

align-items alinha os itens dentro da box pai para o valor dado

align-content alinha todo o conteúdo dentro da box pai para o valor dado

align-self alinha um só conteúdo (align-items só que para um só elemento)

div.items:nth.child(2) {
    align-self: center
}

 alinha somente o segundo elemento da box pai para o centro

flex-grow funciona de forma proporcional começando automaticamente em 0, então quanto maior for o número, mais o elemento/s preencherá do espaço sobrando da box pai

flex-shrink funciona um min-width, começando automaticamente como 0, e os valores são dados em proporção, então se o flex-shrink for 1, o elemento/s terá uma altura mínima e não se tornará responsivo

flex-basis funciona como a width de um elemento flex, porém de uma forma mais dinâmica para preenchimento de conteúdo dentro de uma box de display flex, pois o tamanho pode ser diminuido para que caiba dentro da box (ajuda na responsividade)


flex-wrap funciona como um word-break, ou seja, se o elemento não cabe todo dentro de uma linha ou coluna (flex-direction: row ou column), acontecerá uma quebra de linha para adaptar o conteúdo (geralmente usado para criar grids com o display flex)

<strong><em>shorthand "flex-flow" = flex-direction + flex-wrap</em></strong>

shorthand "flex" = flex-grow + flex-shrink + flex-basis


## GridLayout

para colocar colunas em uma box com display grid, usa-se "grid-template-columns" e coloque em ordem a medida de cada coluna.

Ex.:

    em caso de 3 colunas do mesmo tamanho:

     div#pai {

        display: grid;
        grid-template-columns: 350px 350px 350px;
     }

OBS.: uma medida responsiva que pode ser utilizada é o fr(fragmento) que se adequa ao espaço sobrando

uma forma de simplificar a escrita pra n ficar repetindo a mesma medida é o "repeat()"

    em caso de 10 colunas do mesmo tamanho:

        div#pai {

            display:grid;
            grid-template-columns: repeat(10, 350px)
        }

        10 = quantidade de colunas
        350px = medida de cada coluna 

pode colocar mais de uma medida, alterando o comportamento das divs filhas

vai alternar na sequência que os valores forem colocados

também podemos mudar colunas de posição ou mesclar colunas usando o "grid-column-start" e o "grid-column-end"

ainda mais simples, pode ser feito como: "grid-column: span x" ou "grid-row: span x"

    x = quantidade de mesclagens

assim como as tabelas



## Criando uma grid responsiva sem Media-Query

é bem simples, usaremos outra função no css, e mudaremos o valor de colunas para "auto-fill"

    div#pai {
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(320px 1fr))
    }

significa que o tanto de colunas vai ser automatico de acordo com o tamanho máximo e tamanho mínimo de tela especificados na função "minmax"

também seria facilmente implementado usando media-query, porém dessa maneira gasta menos linhas de código para desempenhar o mesmo papél, já que vai se adaptar aos demais tamanhos de tela 



## Linhas

tudo que foi utilizado nas colunas com o grid também pode ser implementado para as linhas, porém não é muito utilizado pois geralmente usamos o conteúdo para adaptar as linhas 

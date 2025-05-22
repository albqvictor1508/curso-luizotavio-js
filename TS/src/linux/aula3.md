# Linux Symbols

- ***`|`*** - Joga o output de um comando no input do outro
    Ex.: ls *.md | grep aula1.md

- **`&&`** - Permite executar comandos em sequência, só segue em frente se n der erro
    Ex.: sudo apt update && sudo apt upgrade

- **`;`** - Permite executar comandos em sequência, mas ele não liga se um deles der erro, só vai mostrar o erro do comando no terminal e partir pro próximo

- **`||`** - Permite executar comandos em sequência, mas só executa o próximo se o anterior der erro

- **>** - Joga a saída de um comando pra dentro de um arquivo
    Obs.: Se você joga a saida de um comando pra um arquivo, dps joga a saída de outro comando para esse mesmo arquivo, **ele sobrescreve**, esse comportamento só muda se passar **`>>`**

### Other

- echo - printa no terminal
- grep {oque voce quiser} - filtra / pesquisa oque voce quiser dentro dos arquivos
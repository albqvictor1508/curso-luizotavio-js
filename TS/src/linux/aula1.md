# Linux Guide

- sudo - Permite executar programas com privilégios de outro usuário - por padrão, como o superusuário / root. **`sudo`** significa  "substitute user do" (usuário substituto faça)

- jobs - mostra trabalhos em execução
- fg %n - trás oque tiver no foreground para o background
- pwd - mostra o caminho do diretório que você está (/home/albqvictor/www/curso-luizotavio-js/TS/src - Tô no arch linux então é montado assim)

## Navigation

- cd - basicão, muda de diretório
- ls - basicão tb, lista tudo

### Cd variations

- **`.`**: seu diretório atual
- **`..`**: diretório anterior
- **`~`**: pasta home (no meu caso, /home/albqvictor)
- **`-`**: volta pra sua pasta anterior, tipo um ctrl + z

### Ls variations

- **`-a`**: lista os arquivo escondidos
- **`-l`**: lista em formato longo (as permissões, número de links, tamanho em bytes, ultima atualização, todas essas tranqueira)
- **-h**: facilita a leitura, basicão tb
- **@**: ver arquivos estendidos

### Other Commands

- ps aux: lista todos os processos rodando
- cat {nome-do-arquivo}: concatena e exibe o conteudo do arquivo no terminal
- touch - cria arquivo, basicão
- nano - editor de arquivo, basicão
- tail - lista as linhas do arquivo
- wc - conta linhas, palavras e caracteres

### Tail variations

- **`-{numero}`** - mostra a quantidade de linhas que for adicionado em **`numero`**
- **`-f`** - monitora o arquivo e atualiza sempre que o arquivo for alterado (tipo um **`-w`** ou **`--watch`**)

### Wc variations

- -**`-w`**: conta palavras
- -**`-l`**: conta linhas
- -**`-m`**: conta caracteres

#### More

- Estudar todos as permissões e usuários do Unix
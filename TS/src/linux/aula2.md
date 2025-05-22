## Manipulate Directories

- **`cp`** - copia arquivos ou diretórios
    **`-R`**: copia o diretório em modo recursivo (copia tudo que tem dentro, pq cp só copia por padrão só copia arquivos, não pastas)

    Obs.: Segundo o manual do cp, se tiver uma "/" no final do diretório original, cp pode copiar apenas o conteúdo do diretório e não o diretório em si (eu não vi isso ocorrer em testes)

- **mkdir**: basicão, cria pasta
    - **`-p`**: vai criar em modo recursivo (consigo criar um monte de pasta dentro dessa pasta)

    Ex.: mkdir -p salve/salve1/salve2/salve3/{salve4, salve5, salve6} -> {} indica que vão ser criadas 3 pastas dentro de salve3

- **`dolphin`** - no meu caso, já que uso arch, é meu file manager
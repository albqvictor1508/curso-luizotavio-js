## Conteúdo Estático

serve para armazenar conteúdo estático na memória 

Utilizando:

    app.use(express.static(path.resolve(__dirname, 'public')));

Assim dentro da pasta 'public', os arquivos de conteúdo estático serão salvos
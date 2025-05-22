## Background e Foreground

***background = (segundo plano)***
***foreground = (primeiro plano - plano principal)***



- **`sleep {tempo}`** - dorme o terminal pelo tempo que você passar 

- **`&`** - joga um processo pra ser feito em background e ele vai ficar rodando até que termine ou vc pare ele

- **jobs** - lista os processos que estão em background

- **`fg %{number}`** - trás o trabalho de número **`{number}`** para o primeiro plano

- **`kill %{number}`** - mesma ideia do fg, mas esse mata o processo
    **`-TSTP`**: pausa o processo
    **`-CONT`**: continua ele 

- **`-bg %{number}`** - continua o processo tb
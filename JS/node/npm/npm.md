## Npm

## Comandos

### npm init 

inicia o node 

(pode passar os parâmetros que serão utilizados ou dar um 'npm init -y' para utilizar o padrão)

### npm install (npm i)

para instalar um pacote

ex.: 

    npm install express

    npm i express

### npm ls 

lista tudo que foi instalado

### npm outdated 

mostra se possui algum pacote desatualizado, a versão que é requerida, e a versão mais atual

## npm uninstall

desinstala um pacote

## Flags

As flags são muito importantes para o funcionamento dos comandos, principalmente pro <strong>npm outdated</strong>, pois as flags que determinarão qual versão é requerida

Antes de explicar oque significa as flags, é preciso entender como é dividida cada versão do node 

1.3.0

1 -> major 

3 -> minor

0 -> patch

#### patch

o patch trata de correção de bugs daquela versão, mantendo os mesmo recursos e a compatibilidade 

#### minor 

O minor trata de novos recursos na versão, porém nenhum grande recurso que atrapalhe a compatibilidade entre as versões

#### major

O major trata de um grande recurso novo que quebra a compatibilidade 

## Voltando ás Flags

### Flags de Versão

#### ^

a flag ^ é padrão quando se instala um pacote, e ela faz com que o minor e o patch atualizem automaticamente, pois não quebram a compatibilidade

#### ~ 

A flag ~ faz com que somente o patch atualize automaticamente

#### Obs

E se retirar as duas flags da versão, a versão nao atualizará automaticamente 

### Flags de dependencia

as flags de dependências são postas na hora da instalação 

#### --save-dev

Instala como dependência de desenvolvedor, ou seja, o usuário não precisa ter esse pacote para conseguir utilizar a aplicação, somente o desenvolvedor

Ex.: Webpack, Babel, etc

#### --save-prod

Instala como dependência geral, ou seja, tanto o desenvolvedor quanto o usuário precisam ter esse pacote para conseguir utilizar a aplicação.

Ex.: core-js, regenerator-runtime, express, etc

(UTILIZANDO EXEMPLOS DE PACOTES QUE INSTALEI ULTIMAMENTE)

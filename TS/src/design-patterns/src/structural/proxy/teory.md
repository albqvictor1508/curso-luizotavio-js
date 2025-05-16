# Proxy 

## Intenção Oficial

Proxy é um padrão de projeto que tem a intenção de fornecer um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto

## Sobre o Proxy

- Usa composição, portanto tem a estrutura muito semelhante ao **Composite** e **Decorator** (as intenções são completamente diferentes).
- Usa um objeto "proxy" que finge ser o objeto real
- É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais
- Escolher como e quando repassar essa chamada de método para o objeto real.
- Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente.

## Variações

- **Proxy virtual:** Controla o acesso a recursos que podem ser caros para criação ou utilização
- **Proxy Remoto:** Controla acesso a recursos que estão em servidores remotos
- **Proxy de Proteção:** Controla acesso a recursos que possam necessitar autenticação ou permissão
- **Proxy Inteligente:** Além de controlar acesso ao objeto real, também executa tarefas adicionais para saber quando e como executar determinadas ações 

## Aplicabilidade

- Quando tem um objeto caro e não quer permitir acesso direto a esse objeto (proxy virtual)
- Você quer restringir acesso a partes da sua aplicação (proxy de proteção)
- Você quer uma ligação entre seu sistema e um sistema remoto (proxy remoto)
- Você quer fazer cache de chamadas já realizadas (proxy inteligente ou proxy de cache)
- Você quer interceptar quaisquer chamadas de métodos no objeto real por qualquer motivo (por exemplo, criar logs)

## Vantagens

- O código cliente não precisa nem saber que tá usando um Proxy (ele finge ser o objeto real)
- Você pode adicionar novos Proxies sem mudar o código já testado (OCP)
- O Proxy funciona mesmo se o objeto real não estiver operacional ou pronto pra uso
# Proxy 

## Intenção Oficial

Proxy é um padrão de projeto que tem a intenção de fornecer um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto

## Sobre o Proxy

- Usa composição, portanto tem a estrutura muito semelhante ao **Composite** e **Decorator** (as intenções são completamente diferentes).
- Usa um objeto "proxy" que finge ser o objeto real
- É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais
- Escolher como e quando repassar essa chamada de método para o objeto real.
- Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente.

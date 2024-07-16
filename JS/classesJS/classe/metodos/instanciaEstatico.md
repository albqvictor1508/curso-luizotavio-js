## Método de instância e método estático

### Método de instância

O método de instância é o método comumente utilizado, é o método que se é acessado pela instância da classe e tem acesso aos dados e parâmetros passados dentro desse construtor

Ex.:

    Class Pinto {
        constructor(nome) {
            this.nome = nome;
        }

        TAMANHO(valor) {
            console.log(`Seu ${this.nome} tem ${valor}cm duro`);
        }
    }

    const pintin = new Pinto(21312313);
    pintin.tamanho(80);

Exemplo de método de instância.

### Método estático

Método estático é um método que não é executado pela instância, e para a instância aquele método não existe, somente para a própria classe (como se fosse um método privado da classe), a sintaxe é quase a mesma

        Class Pinto {
        constructor(nome) {
            this.nome = nome;
        }

        static TAMANHO(valor) {
            console.log(`Seu ${this.nome} tem ${valor}cm duro`);
        }
    }

    Pinto.TAMANHO(80);

Dessa forma, sendo chamada pela própria classe, e não existindo para uma possível instância.
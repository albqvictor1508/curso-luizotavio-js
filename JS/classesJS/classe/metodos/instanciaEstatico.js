function criarClasse() {
    function amor() {
        console.log('Eu amo minha namorada');
    }
    
    class Controle {
        constructor(aparelho) {
            this.aparelho = aparelho;
            this.ligado = false;
            this.volume = 0;
            amor();
        }

        ligarControle() {
            if(this.ligado) console.log(`O aparelho já está ligado`);

            return this.ligado = true;
        }

        desligarControle() {
            if(!this.ligado) console.log(`O aparelho já está desligado`);

            return this.ligado = false;
        }

        aumentarVolume() {
            if(typeof this.volume !== 'number') return;
            if(this.volume >= 10) {
                console.log(`não é possível aumentar mais!`);
                return;
            }
            this.volume += 2;
        }

        baixarVolume() {
            if(typeof this.volume !== 'number') return;
            if(this.volume <= 0) {
                console.log(`não é possível baixar mais!`);
                return;
            }
            this.volume += 2;
        }

        static Tamanho(x) {
            console.log(x + 'cm');
        }

        static fazConta(num1=0, operador, num2=0) {
            if(operador === '+') console.log(num1 += num2);
            if(operador === '-') console.log(num1 -= num2);
            if(operador === '/') console.log(num1 /= num2);
            if(operador === '*') console.log(num1 *= num2);
            if(operador === '**') console.log(num1 **= num2);
        }

        static ExplodirControle() {
            console.log(`ESSA MSR VAI EXPLODIRRRR`);
        }
    }
    const controlinho = new Controle('pc gamer');
    controlinho.aumentarVolume()
    controlinho.aumentarVolume()
    controlinho.aumentarVolume()
    controlinho.aumentarVolume()
    controlinho.aumentarVolume()
    controlinho.aumentarVolume()
    console.log(controlinho)
    console.log('\n');
    Controle.fazConta(10, '/', 10);
    Controle.ExplodirControle();
    Controle.Tamanho(25);
}
criarClasse();

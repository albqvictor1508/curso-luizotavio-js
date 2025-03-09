/*
Liskov Substitution Principle (Princípio da Substituição de Liskov) de forma mais simples ==> Se meu programa espera o tipo "Animal" que vem da classe Animal, A minha classe "Cachorro" que herda de animal também deve servir

class teste {
  private name = "macaco";

}

class teste2 extends teste {

}

console.log(typeof teste === typeof teste2); //true
*/

export abstract class Discount {
  protected discount = 0;
  calculate(price: number): unknown { //tirando o tipo number, pra que as classes que herdaram consigam se comportar diferente da classe principal, quebrando o LSP
    return price - price * this.discount
  };
}

export class FiftyPercentDiscount extends Discount {
  protected discount = 0.5;
  calculate(price: number): string { //dessa forma, a classe herdada de desconto está quebrando o princípio
    return "";
  }
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.5;
}
export class NoDiscount extends Discount {}

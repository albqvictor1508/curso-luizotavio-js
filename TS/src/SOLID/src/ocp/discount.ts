/*
Open / closed Principle ==> Entidades devem estar abertas para extensão, porém fechadas para modificação.
*/

//criar uma classe pra aplicar desconto, pois dessa forma, posso criar métodos com os descontos e aplicá-los quando eu quiser, sem alterar o código fonte do shopping cart, ja que o OCP (Open Close Principle) fala que devemos fazer com que as nossas classes sejam abertas para extensão, mas fechadas para alteração.
export abstract class Discount {
  abstract calculate(price: number): number;
}

export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price * price - this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price * price - this.discount;
  }
}
export class NoDiscount extends Discount {
  private readonly discount = 0.5;
  calculate(price: number): number {
    return price * price - this.discount;
  }
}

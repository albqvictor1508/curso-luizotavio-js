abstract class Car {
	constructor(
		private name: string,
		private age: number,
	) {}

	accelerate(): void {
		console.log("accelerating...");
	}
}

class Celta extends Car {}

class Marea extends Car {}

class Nivus extends Car {}

class Pilot {
	private car: Car;

	constructor(car: Car) {
		this.car = car;
	}
}

export interface EcommerceProductProtocol {
  name: string,
  price: number,
}

export class EcommerceShoppingCart {
  private products: EcommerceProductProtocol[] = [];
  private discountStrategy: DiscountStrategy = new DiscountStrategy();  

  addProduct(...products: EcommerceProductProtocol[]): void {
    products.forEach(p => {
      this.products.push(p);
    });
  }

  getProducts(): EcommerceProductProtocol[] {
	return this.products;
  }

  getTotal(): number {
	return this.products.reduce((count, p) => p.price + count, 0);
  }

  getTotalWithDiscount(): number {
	const total = this.getTotal();

	return this.discountStrategy.getDiscount(this);
  }
}

export class DiscountStrategy {
	private discount: number = 0;
	
	getDiscount(cart: EcommerceShoppingCart): number {
		return cart.getTotal();
	}
}

const shoppingCart = new EcommerceShoppingCart();
shoppingCart.addProduct({name: "savero nova", price: 200});
shoppingCart.addProduct({name: "savero velha", price: 100});

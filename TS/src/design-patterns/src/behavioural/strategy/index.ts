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
	protected discount: number = 0;
	
	getDiscount(cart: EcommerceShoppingCart): number {
		return cart.getTotal();
	}
}

export class DefaultDiscount extends DiscountStrategy {
	protected discount: number = 0;

	getDiscount(cart: EcommerceShoppingCart): number {
		const total = cart.getTotal();

		if(total >= 100 && total < 200) {
			this.discount = 10;
		}
		if(total >= 200 && total < 300) {
			this.discount = 20;
		}
		if(total >= 300) {
			this.discount = 30;
		}

		return total - total * (this.discount / 100);
	}
}

export class NewDiscount extends DiscountStrategy {
	protected discount: number = 0;

	getDiscount(cart: EcommerceShoppingCart): number {
		const total = cart.getTotal();

		if(total >= 150) {
			this.discount = 5;
		}

		return total - (total * this.discount / 100);
	}
}

const shoppingCart = new EcommerceShoppingCart();
shoppingCart.addProduct({name: "savero nova", price: 200});
shoppingCart.addProduct({name: "savero velha", price: 100});

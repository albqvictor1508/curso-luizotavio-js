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
  private discount: number = 0;

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
	if()
  }
}

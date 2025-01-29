class Product {
	constructor(
		private _name: string,
		private price: number,
	) {}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	getPrice() {
		return this.price;
	}

	setPrice(price: number) {
		this.price = price;
	}
}

class ShoppingCart {
	private readonly products: Product[] = [];

	insertProducts(...products: Product[]): void {
		this.products.push(...products);
	}

	countProducts(): number {
		return this.products.length;
	}

	totalValue(): string {
		const totalValue = this.products.reduce(
			(sum, product) => sum + product.getPrice(),
			0,
		);

		return `R$ ${totalValue}`;
	}
}

const product = new Product("AOC HERO 165 HZ", 760);
const cart = new ShoppingCart();
cart.insertProducts(product, product, product); //price=1520
console.log(cart.totalValue());

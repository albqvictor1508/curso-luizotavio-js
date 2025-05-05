import type { CartItemMock } from "./cart-item";
import type { Discount } from "./discount";

export class ShoppingCartMock {
	private products: CartItemMock[] = [];
	private totalPrice = this.products.reduce(
		(count, p) => p.getPrice() + count,
		0,
	);
	constructor(
		private discount: Discount,
		...product: CartItemMock[]
	) {
		for (const p of product) {
			this.products.push(p);
		}
	}

	public isEmpty(): boolean {
		return true;
	}

	public getProducts(): CartItemMock[] {
		return this.products;
	}

	public getTotal() {
		return this.totalPrice;
	}

	getTotalWithDiscount(): number | null {
		return this.discount.calculate(this.totalPrice);
	}
}

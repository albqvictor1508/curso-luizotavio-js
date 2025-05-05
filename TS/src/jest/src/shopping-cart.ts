import type { CartItemMock } from "./cart-item";
import type { Discount } from "./discount";

export class ShoppingCartMock {
	private products: CartItemMock[] = [];
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

	getTotal(): number {
		const totalPrice = this.products.reduce(
			(count, p) => p.getPrice() + count,
			0,
		);
		return totalPrice;
	}
}

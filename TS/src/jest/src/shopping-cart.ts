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
}

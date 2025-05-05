import type { CartItemMock } from "./cart-item";
import type { Discount } from "./discount";

export class ShoppingCartMock {
	private products: CartItemMock[] = [];
	private totalPrice = 0;
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
		this.totalPrice = this.products.reduce(
			(count, p) => p.getPrice() + count,
			0,
		);
		return this.totalPrice;
	}

	getTotalWithDiscount(): number | null {
		if (!this.totalPrice) return null;

		return this.discount.calculate(this.totalPrice);
	}
}

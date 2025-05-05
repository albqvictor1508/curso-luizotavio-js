import type { CartItemMock } from "./cart-item";
import type { Discount } from "./discount";

export class ShoppingCartMock {
	constructor(
		private discount: Discount,
		private products: CartItemMock[],
	) {}

	isEmpty(): boolean {
		return true;
	}
}

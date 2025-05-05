import type { Discount } from "./discount";

export class ShoppingCart {
	constructor(private discount: Discount) {}

	isEmpty(): boolean {
		return true;
	}
}

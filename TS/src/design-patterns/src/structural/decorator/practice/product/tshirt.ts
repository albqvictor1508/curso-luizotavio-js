import type { ProductProtocol } from "./product-protocol";

export class Tshirt implements ProductProtocol {
	constructor(
		private name: string,
		private price: number,
	) {}
	getPrice(): number {
		return this.price;
	}
	getName(): string {
		return this.name;
	}
}

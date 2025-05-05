export class CartItemMock {
	constructor(
		private name: string,
		private price: number,
		private qtd: number,
	) {}
	getName(): string {
		return this.name;
	}

	getPrice(): number {
		return this.price;
	}
	getQuantity(): number {
		return this.qtd;
	}
}

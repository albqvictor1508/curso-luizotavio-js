export abstract class ProductComponent {
	abstract getPrice(): number;
	add(product: ProductComponent): void {}
	remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
	constructor(
		private name: string,
		private price: number,
	) {
		super();
	}
	getPrice(): number {
		return this.price;
	}

	getName(): string {
		return this.name;
	}
}

export class ProductComposite extends ProductComponent {
	private children: ProductComponent[] = [];

	getPrice(): number {
		return this.children.reduce((count, p) => p.getPrice() + count, 0);
	}

	add(product: ProductComponent): void {
		this.children.push(product);
	}

	remove(product: ProductComponent): void {
		const productIndex: number = this.children.indexOf(product);
		if (!productIndex) return;
		this.children.splice(productIndex - 1, 1);
	}
}

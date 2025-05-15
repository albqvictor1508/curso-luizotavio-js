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

	add(...products: ProductComponent[]): void {
		for (const p of products) {
			this.children.push(p);
		}
		console.log(this.children);
	}

	remove(product: ProductComponent): void {
		const productIndex: number = this.children.indexOf(product);
		if (!productIndex) return;
		this.children.splice(productIndex - 1, 1);
	}
}

const pencil = new ProductLeaf("pencil", 20);
const tshirt = new ProductLeaf("camisa seaway ratão", 10);
const sneakers = new ProductLeaf("basquetera", 50);
const productBox = new ProductComposite();
productBox.add(pencil, tshirt, sneakers);
const pen = new ProductLeaf("caneta", 10);
productBox.add(pen);

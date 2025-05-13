export abstract class ExampleCreator {
	abstract factoryMethod(): ExampleProduct;

	createAndShow(): void {
		const product = this.factoryMethod();
		console.log(product);
	}
}

export interface ExampleProduct {
	sayHi(): void;
}

export class ExampleConcreteProduct implements ExampleProduct {
	sayHi(): void {
		console.log("hi");
	}
}

export class ExampleConcreteCreator extends ExampleCreator {
	factoryMethod(): ExampleProduct {
		return new ExampleConcreteProduct();
	}
}

import type { MealCompositeProtocol } from "../pratice-2";

export class MealBox implements MealCompositeProtocol {
	private readonly children: MealCompositeProtocol[] = [];

	getPrice(): number {
		const totalPrice: number = this.children.reduce(
			(count, m) => m.getPrice() + count,
			0,
		);
		return totalPrice;
	}

	add(...meal: MealCompositeProtocol[]) {
		meal.forEach((m) => this.children.push(m));
	}
}

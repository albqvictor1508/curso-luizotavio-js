import type { MealBuilderProtocol } from "../pratice-2";

export class MainDishBuilder implements MealBuilderProtocol {
	makeMeal(): this {
		throw new Error("Method not implemented.");
	}
	makeBeverage(): this {
		throw new Error("Method not implemented.");
	}
	makeDessert(): this {
		throw new Error("Method not implemented.");
	}
	private meal: MealBox = new MealBox();
}

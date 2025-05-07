import type { MealBuilderProtocol } from "../pratice-2";
import { MealBox } from "./meal-box";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
	private meal: MealBox = new MealBox();

	makeMeal(): this {
		const rice = new Rice("Arroz", 10);
		const beans = new Beans("Feijão verde", 10);
		this.meal.add(rice, beans);
		return this;
	}
	makeBeverage(): this {
		const beverage = new Beverage("caixa de skol", 27);
		this.meal.add(beverage);
		return this;
	}
	makeDessert(): this {
		const dessert = new Dessert("dindin", 1.5);
		this.meal.add(dessert);
		return this;
	}

	getMeal(): MealBox {
		return this.meal;
	}

	resetMeal(): void {
		this.meal = new MealBox();
	}
}

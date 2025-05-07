export interface MealCompositeProtocol {
	getPrice(): number;
}

export interface MealBuilderProtocol {
	makeMeal(): this;
	makeBeverage(): this;
	makeDessert(): this;
}

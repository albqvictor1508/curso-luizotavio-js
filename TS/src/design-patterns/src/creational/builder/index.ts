import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDish = new MainDishBuilder().makeMeal();
mainDish.resetMeal();
const meal2 = new MainDishBuilder().makeMeal();
const veganDish = new VeganDishBuilder().makeMeal();

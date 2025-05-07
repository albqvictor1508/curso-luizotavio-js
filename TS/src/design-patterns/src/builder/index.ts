import { MealBox } from "./classes/meal-box";
import { Bean, Meat, Rice } from "./classes/meals";

const rice = new Rice("Arroz", 10.5);
const bean = new Bean("Feijão", 0.5);
const meat = new Meat("Carninha papai", 49.99);
const mealBox = new MealBox();
mealBox.add(rice, bean, meat);

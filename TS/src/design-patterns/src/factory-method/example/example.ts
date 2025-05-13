export type Car = { model: string; engine: number };
export type CarPrototype = { showDetails(): void };
export type CarTest<T, U> = { model: T; engine: U };

const carPrototype: CarPrototype = {
	showDetails: (): void => {
		console.log(this);
	},
};

const carTest = (
	model: string,
	engine: number,
): CarTest<string, number> & CarPrototype => {
	const carObj = Object.create(carPrototype);
	return Object.assign(carObj, { model, engine });
};

const carFactory = (model: string, engine: number): Car & CarPrototype => {
	const idAsPrivateMember = Math.floor(Math.random() * 1000);
	const carObj = Object.create(carPrototype);
	return Object.assign(carObj, { id: idAsPrivateMember, model, engine });
};

const car1 = carFactory("marea", 2.8);
car1.showDetails();
const car2 = carFactory("santana", 3);
car2.showDetails();
const car3 = carFactory("celta", 1);
car3.showDetails();

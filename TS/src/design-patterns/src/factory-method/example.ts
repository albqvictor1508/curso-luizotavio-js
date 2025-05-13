export type Car = { model: string; engine: string };
export type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
	showDetails: (): void => {
		console.log(this);
	},
};

const carFactory = (model: string, engine: string): Car & CarPrototype => {
	const idAsPrivateMember = Math.floor(Math.random() * 1000);
	const carObj = Object.create(carPrototype);
	return Object.assign(carObj, { id: idAsPrivateMember, model, engine });
};

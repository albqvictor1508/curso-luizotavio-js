@decorator
export class Car {
	constructor(public cor: string) {}
}
export function decorator<T extends new (...args: any[]) => any>(target: T): T {
	return class extends target {
		cor: string;
		name: string;

		constructor(...args: any[]) {
			super(...args);
			this.name =
				"Posso mudar aqui o nome que foi enviado no constructor quando foi instânciado";
			this.cor = "mudar aq a cor também";
		}
	};
}
const carDecorated = decorator<typeof Car>(Car);
const car = new carDecorated("yellow");

@decorator("victor", "arruda") //uso de factory function e retornando um decorator
export class Car {
	constructor(public cor: string) {}
}
export function decorator(param1: string, param2: string) {
	return function <T extends new (...args: any[]) => any>(target: T): T {
		return class extends target {
			cor: string;
			name: string;

			constructor(...args: any[]) {
				super(...args);
				this.name = param1;
				this.cor = param2;
			}
		};
	};
}

const car = new Car("azul");

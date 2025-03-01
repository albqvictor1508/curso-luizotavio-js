type Constructor = {
	new (...args: any[]): any;
};

@anotherDecoration("mezera")
@decorator("victor", "arruda") //uso de factory function e retornando um decorator
export class Car {
	constructor(public cor: string) {}
}

export function anotherDecoration(msr: string) {
	return (target: Constructor): Constructor => {
		return target;
	};
}

export function decorator(param1: string, param2: string) {
	return function <T extends Constructor>(target: T): T {
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

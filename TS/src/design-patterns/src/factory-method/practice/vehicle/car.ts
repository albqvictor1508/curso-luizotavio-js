import type { Vehicle } from "./index";

export class Car implements Vehicle {
	constructor(private name: string) {}
	stop(): void {
		console.debug(`The car with name: ${this.name} is stopping`);
	}

	pickUp(customerName: string): void {
		console.debug(`${this.name} está buscando ${customerName}`);
	}
}

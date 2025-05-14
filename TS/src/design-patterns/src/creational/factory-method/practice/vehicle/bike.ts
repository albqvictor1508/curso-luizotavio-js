import type { Vehicle } from "./index";

export class Bike implements Vehicle {
	constructor(private name: string) {}
	stop(): void {
		console.debug(`The car with name: ${this.name} is stopping`);
	}

	pickUp(customerName: string): void {
		console.debug(`${this.name} está buscando ${customerName}`);
	}
}

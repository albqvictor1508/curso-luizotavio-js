import type { Vehicle } from "./index";
import type { Customer } from "../customer/index";

export class IndividualVehicle implements Vehicle {
	constructor(
		private name: string,
		private readonly costumer: Customer,
	) {}
	pickUp(): void {
		console.log(`${this.name} está buscando ${this.costumer.name}`);
	}
}

import type { Vehicle } from "./index";

export class EnterpriseVehicle implements Vehicle {
	pickUp(): void {
		throw new Error("Method not implemented.");
	}
}

import type { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle-factory";
import { Bicycle } from "../vehicle/bicycle";

export class BicycleFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Bicycle(vehicleName);
	}
	pickUp(customerName: string, vehicleName: string): Vehicle {
		const bicycle = this.getVehicle(vehicleName);
		bicycle.pickUp(customerName);
		return bicycle;
	}
}

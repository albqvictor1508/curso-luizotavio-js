import type { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle-factory";
import { Bike } from "../vehicle/bike";

export class BikeFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Bike(vehicleName);
	}
	pickUp(customerName: string, vehicleName: string): Vehicle {
		const bike = this.getVehicle(vehicleName);
		bike.pickUp(customerName);
		return bike;
	}
}

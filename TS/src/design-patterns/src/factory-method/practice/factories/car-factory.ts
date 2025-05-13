import type { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle-factory";
import { Car } from "../vehicle/car";

export class CarFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Car(vehicleName);
	}
	pickUp(customerName: string, vehicleName: string): Vehicle {
		throw new Error("Method not implemented.");
	}
}

import type { Customer } from "../customer/index";
import { IndividualCustomer } from "../customer/individual-customer";
import type { Vehicle } from "../vehicle/index";
import { IndividualVehicle } from "../vehicle/individual-vehicle";
import type { CreateVehicleCostumer } from "./create-vehicle-costumer";

export class IndividualCreateVehicleCostumer implements CreateVehicleCostumer {
	createCustomer(customerName: string): Customer {
		return new IndividualCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): Vehicle {
		const customer = this.createCustomer(customerName);
		return new IndividualVehicle(vehicleName, customer);
	}
}

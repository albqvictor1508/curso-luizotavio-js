import type { Customer } from "../customer";
import type { Vehicle } from "../vehicle";

export interface CreateVehicleCostumer {
	createCustomer(customerName: string): Customer;
	createVehicle(vehicleName: string, customerName: string): Vehicle;
}

import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { Customer } from "../customer/index";
import { EnterpriseVehicle } from "../vehicle/enterprise-vehicle";
import { Vehicle } from "../vehicle/index";
import type { CreateVehicleCostumer } from "./create-vehicle-costumer";

export class EnterpriseCreateVehicleCostumer implements CreateVehicleCostumer {
	createCustomer(customerName: string): Customer {
		return new EnterpriseCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): Vehicle {
		const customer = this.createCustomer(customerName);
		return new EnterpriseVehicle(vehicleName, customer);
	}
}

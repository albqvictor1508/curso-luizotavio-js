import type { Customer } from "./index";

export class EnterpriseCustomer implements Customer {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

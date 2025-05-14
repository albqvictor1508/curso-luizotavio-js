import type { Customer } from "./index";

export class EnterpriseCustomer implements Customer {
	constructor(public name: string) {}
}

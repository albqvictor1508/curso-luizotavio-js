import type { Customer } from "./index";

export class IndividualCustomer implements Customer {
	constructor(public name: string) {}
}

type Car = {
	name: string;
	surname: string;
	completeName: () => string;
};

export class Mercedes implements Car {
	constructor(
		public name: string,
		public surname: string,
	) {}

	completeName(): string {
		return `${this.name} ${this.surname}`;
	}
}

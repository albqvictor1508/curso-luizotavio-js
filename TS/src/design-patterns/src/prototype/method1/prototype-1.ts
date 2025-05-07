export interface Prototype {
	clone(): Prototype;
}

export class Person implements Prototype {
	constructor(
		public name: string,
		public age: number,
	) {}
	clone(): Prototype {
		const newObject = Object.create(this);
		return newObject;
	}
}

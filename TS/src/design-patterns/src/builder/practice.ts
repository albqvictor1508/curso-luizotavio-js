export class Person {
	constructor(
		public name?: string,
		public age?: number,
	) {}
}

export class PersonBuilder {
	private person = new Person();

	resetPerson(): void {
		this.person = new Person();
	}

	setName(name: string): this {
		this.person.name = name;
		return this;
	}

	setAge(age: number): this {
		this.person.age = age;
		return this;
	}

	getResult(): Person {
		return this.person;
	}
}

//isso que é method chaining, chamar os métodos encadeados,isso só é possível pois os métodos retornam this, ou seja, retornam a instância.
const person = new PersonBuilder().setName("vito").setAge(18).getResult();

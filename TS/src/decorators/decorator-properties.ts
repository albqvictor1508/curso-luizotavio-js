export const decorator = (classPrototype: any, name: string | symbol): any => {
	let propertyValue: any;
	return {
		get: () => propertyValue,
		set: (value): void => {
			propertyValue = 1; //posso alterar o valor como bem entender aqui, até mesmo fazer coisas que o ts não deixaria, que ele não reclama
		},
	};
};

export class OnePerson {
	@decorator
	private name: string;
	private surname: string;
	private age: number;
	constructor(name: string, surname: string, age: number) {
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	@decorator
	showAge(): string {
		return `${this.age} anos`;
	}

	sayPhrase(phrase: string) {}
}
const person = new OnePerson("victor", "de lexsa", 18);
console.log(person.showAge());

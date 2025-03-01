export const decorator = (
	classPrototype: any,
	methodName: string,
	descriptor: PropertyDescriptor,
): PropertyDescriptor => {
	return {
		writable: false,
		value: (...args: number[]): Array<number> => {
			return [1, 2, 3, 4, 5];
		},
	};
};

export class OnePerson {
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
	//esse método deve retornar uma string, mas graças ao decorator, tá retornando um array de numbers e o ts não reclama disso, então tem que tomar muito cuidado ao usar decorators.
}
const person = new OnePerson("victor", "de lexsa", 18);
console.log(person.showAge());

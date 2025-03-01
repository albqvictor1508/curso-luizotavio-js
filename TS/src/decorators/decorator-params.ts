export const decorator = (
	classPrototype: any,
	paramName: string | symbol,
	index: number,
): void => {
  console.log(classPrototype);
  console.log(paramName);
  console.log(index);
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

  sayPhrase(@decorator phrase: string) {

  }
}
const person = new OnePerson("victor", "de lexsa", 18);
console.log(person.showAge());

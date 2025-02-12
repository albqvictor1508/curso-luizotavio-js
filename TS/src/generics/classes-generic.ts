export class Dog<T, U> {
	constructor(
		private name: T,
		private age: U,
	) {}
}

const billy = new Dog("billy big", { age: 6 }); //aceitando qualquer tipo dentro da classe
const lilly = new Dog<string, { age: number }>("billy big", { age: 6 });

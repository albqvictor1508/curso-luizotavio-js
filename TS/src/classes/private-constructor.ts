//construtor privado e padrões de projeto como Singleton (uma única instância de uma classe) e Factory Method

class Person {
	private static person: Person;

	private constructor(
		private name: string,
		private surname: string,
		private age: number,
	) {}

	static getPerson(name: string, surname: string, age: number): Person {
		if (Person.person) return Person.person;

		//criando a instância dentro da própria classe, e se já tiver instanciado a classe antes, será o mesmo objeto;
		Person.person = new Person(name, surname, age);
		return Person.person;
	}
}

const person1 = Person.getPerson("vito", "de lexa", 18);
const person20 = Person.getPerson("vito", "de lexa", 18);

console.log(person1 === person20); // Saída: true //significa que a classe é instanciada somente uma vez

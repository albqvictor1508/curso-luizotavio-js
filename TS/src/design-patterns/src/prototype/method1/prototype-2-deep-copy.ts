export interface Prototype {
	clone(): Prototype;
}

class Address implements Prototype {
	constructor(
		public street: string,
		public houseNumber: number,
	) {}
	clone(): Address {
		return new Address(this.street, this.houseNumber);
	}
}

export class Person implements Prototype {
	public adresses: Address[] = [];
	constructor(
		public name: string,
		public age: number,
	) {}
	clone(): Person {
		//deep copy: criando uma nova instância com os mesmo atributos da outra instância
		const newObject = new Person(this.name, this.age);
		newObject.adresses = this.adresses.map((address) => address.clone());
		return newObject;
	}

	addAddress(address: Address) {
		this.adresses.push(address);
	}
}

const address1 = new Address("Conjunto", 370);
const person1 = new Person("victor", 18);

person1.addAddress(address1);
person1.adresses[0].street = "qualquer rua";

//shallow copy, o objeto person2 utiliza o prototype do person1, então oque for alterado no person1, é refletido no person2, uma desvantagem absurda no uso desse padrão de projeto, mas pode ser resolvido com dependências externas ou utilizando algumas outras formas.
const person2 = person1.clone();
console.log(person2.adresses);

function Person(name, age) {
	this.name = name;
	this.age = age;
	return this;
}

const personPrototype = {
	firstName: "victor",
	lastName: "albuquerque",
	age: 18,
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
	Person.call(this, firstName, lastName, age);
	this.fromSubClass = "salve da sub class";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person("João", "Miranda", 18);

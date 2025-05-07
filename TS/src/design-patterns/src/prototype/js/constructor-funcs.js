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

const person1 = new Person("João", "Miranda", 18);

const person = {
	firstName: "victor",
	lastName: "albuquerque",
	age: 18,
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

const anotherPerson = Object.create(person);
console.log(anotherPerson.fullName());

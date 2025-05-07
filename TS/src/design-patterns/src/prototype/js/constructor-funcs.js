function Person(name, age) {
	this.name = name;
	this.age = age;
	return this;
}
Person.prototype = Object.create(personPrototype);

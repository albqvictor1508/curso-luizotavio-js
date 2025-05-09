abstract class Car {
	constructor(
		private name: string,
		private age: number,
	) {}

	accelerate(): void {
		console.log("accelerating...");
	}
}

class Celta extends Car {}

class Marea extends Car {}

class Nivus extends Car {}

class Pilot {
	private car: Car;

	constructor(car: Car) {
		this.car = car;
	}
}

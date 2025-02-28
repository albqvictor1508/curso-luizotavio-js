export class Car {
	constructor(public cor: string) {}
}
export function decorator<T>(target: T) {
	return target;
}
const carDecorated = decorator(Car);
const car = new carDecorated();

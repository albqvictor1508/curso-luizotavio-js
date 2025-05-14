import { BikeFactory } from "./practice/factories/bike-factory";
import { CarFactory } from "./practice/factories/car-factory";
import { getRandomNumber } from "./practice/random-number";
import type { Vehicle } from "./practice/vehicle";

export const randomVehicleAlgorithm = (): Vehicle => {
	const carFactory = new CarFactory();
	const bikeFactory = new BikeFactory();

	const car1 = carFactory.getVehicle("marea");
	const car2 = carFactory.getVehicle("santana");
	const car3 = carFactory.getVehicle("up");
	const car4 = carFactory.getVehicle("nivus");
	const car5 = carFactory.getVehicle("mobi");
	const car6 = carFactory.getVehicle("kicks");

	const bike1 = bikeFactory.getVehicle("start");
	const bike2 = bikeFactory.getVehicle("pop");
	const bike3 = bikeFactory.getVehicle("avelloz");
	const bike4 = bikeFactory.getVehicle("biz");
	const bike5 = bikeFactory.getVehicle("ishad");
	const bike6 = bikeFactory.getVehicle("kawasaki ninja");

	const vehicles: Vehicle[] = [
		car1,
		car2,
		car3,
		car4,
		car5,
		car6,
		bike1,
		bike2,
		bike3,
		bike4,
		bike5,
		bike6,
	];
	const randomNumber = getRandomNumber(vehicles.length);
	return vehicles[randomNumber];
};

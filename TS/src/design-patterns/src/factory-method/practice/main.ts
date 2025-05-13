import { randomVehicleAlgorithm } from "../random-vehicle-algorithm";

for (let i = 0; i < 10; i++) {
	const vehicle = randomVehicleAlgorithm();
	vehicle.pickUp("SÁVIO");
}

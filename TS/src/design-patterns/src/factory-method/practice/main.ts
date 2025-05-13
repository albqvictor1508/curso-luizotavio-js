import { CarFactory } from "./factories/car-factory";

const carFactory = new CarFactory();
const car1 = carFactory.getVehicle("fusca");
car1.pickUp("maçelo");
car1.stop();

const car2 = carFactory.getVehicle("marea");
car2.pickUp("joão");
car2.stop();

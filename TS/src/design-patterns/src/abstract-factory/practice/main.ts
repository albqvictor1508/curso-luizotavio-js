import { EnterpriseCreateVehicleCostumer } from "./factories/enterprise-vehicle-costumer";
import { IndividualCreateVehicleCostumer } from "./factories/individual-vehicle-costumer";

const enterpriseFactory = new EnterpriseCreateVehicleCostumer();
const individualFactory = new IndividualCreateVehicleCostumer();

const car1 = enterpriseFactory.createVehicle("celta", "joseana");
const car2 = individualFactory.createVehicle("maverick", "josé");

car1.pickUp();
car2.pickUp();

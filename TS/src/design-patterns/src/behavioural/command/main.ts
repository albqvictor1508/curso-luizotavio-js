import { LightPowerCommand } from "./command";
import { SmartHouseLight } from "./practice";

const house = new SmartHouseLight("luzes")
const lightPowerCommand = new LightPowerCommand(house);
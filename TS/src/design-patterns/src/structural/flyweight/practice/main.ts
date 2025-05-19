import { deliveryContext } from "./delivery-context";
import { DeliveryFactory } from "./delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "vito", 30, "conjunto", "sapé");
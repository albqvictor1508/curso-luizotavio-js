import { DeliveryLocationData } from "./delivery-types.js";
import type {DeliveryFlyweight} from "./index.ts";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}
  
  deliver(name: string, number: number): void {
    console.log("Entrega para %s", name);
  }
}

import {DeliveryFlyweight} from "./index.ts";

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState) {};

}

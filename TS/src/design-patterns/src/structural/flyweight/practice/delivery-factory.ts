import { DeliveryFlyweight } from ".";
import { DeliveryLocationData, DeliveryLocationDictionary } from "./delivery-types";

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = new Map();
    
    private createId(data: DeliveryLocationData): string {
        return Object.values(data).map(i => i.replace(/\s+/, "")).join("_").toLocaleLowerCase();
    }

    makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
        if(d)
    }
}
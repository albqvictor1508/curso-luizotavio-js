import { DeliveryFlyweight } from ".";
import { DeliveryLocation } from "./delivery-location";
import { DeliveryLocationData, DeliveryLocationDictionary } from "./delivery-types";

export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = new Map();
    
    private createId(data: DeliveryLocationData): string {
        return Object.values(data).map(i => i.replace(/\s+/, "")).join("_").toLocaleLowerCase();
    }

    makeLocation(intrinsicState: DeliveryLocationData): DeliveryFlyweight {
        const id = this.createId(intrinsicState);
        if(id in this.locations) return this.locations.get(id) as DeliveryFlyweight;
        this.locations.set(id, new DeliveryLocation(intrinsicState));
        return this.locations.get(id) as DeliveryFlyweight; 
    }
}
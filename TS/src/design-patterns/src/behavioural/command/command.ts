import { SmartHouseLight } from "./practice";

export interface SmartHouseCommand {
    execute(): void;
    undo(): void;
}

export class LightPowerCommand implements SmartHouseCommand {
    constructor(private readonly light:SmartHouseLight) {}
    execute(): void {
        this.light.toggle();
    }
    undo(): void {
        this.light.toggle();
    }
}

export class LightIntensityCommand implements SmartHouseCommand {
    execute(): void {
        throw new Error("Method not implemented.");
    }
    undo(): void {
        throw new Error("Method not implemented.");
    }
    
}
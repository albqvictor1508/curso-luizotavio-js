import { SmartHouseCommand } from "./command";

export class SmartHouseApp {
    private commands: Map<string, SmartHouseCommand> = new Map();
    
    addComand(key: string, command: SmartHouseCommand) {
        this.commands.set(key, command);
    }
}
import { SmartHouseCommand } from "./command";

export class SmartHouseApp {
    private commands: Map<string, SmartHouseCommand> = new Map();
    
    addComand(key: string, command: SmartHouseCommand): void {
        this.commands.set(key, command);
    }

    executeCommand(key: string): void {
        this.commands.get(key)?.execute();
    }

    undoCommand(key: string): void {
        this.commands.get(key)?.undo();
    }
}
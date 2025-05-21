export class SmartHouseLight {
    private isOn: boolean = false;
    private intensity: number = 50;

    constructor(public name: string) {}

   getPowerStatus(): string {
    return this.isOn ? "on" : "off";  
   }
   
   toggle(): void {
    this.isOn = !this.isOn;
   } 
}
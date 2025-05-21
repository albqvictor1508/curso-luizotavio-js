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
   
   increaseIntensity(): number {
    if(this.intensity >= 100) return this.intensity;
    this.intensity += 10;
    return this.intensity;
   }

   decreaseIntensity(): number {
    if(this.intensity <= 0) return this.intensity;
    this.intensity -= 10;
    return this.intensity; 
   }
}
import type { DeviceImpl } from "./index";

export class Radio implements DeviceImpl {
	setName(name: string): void {
		throw new Error("Method not implemented.");
	}
	private volume = 10;
	private power = false;
	private name = "Radio";

	setPower(powerStatus: boolean): void {
		this.power = powerStatus;
	}

	getPower(): boolean {
		return this.power;
	}

	getName(): string {
		return this.name;
	}

	getVolume(): number {
		return this.volume;
	}

	setVolume(volume: number): void {
		if (volume <= 0 || volume > 100) return;
		this.volume = volume;
	}
}

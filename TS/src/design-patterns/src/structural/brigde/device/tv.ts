import type { DeviceImpl } from "./index";

export class Tv implements DeviceImpl {
	setName(name: string): void {
		throw new Error("Method not implemented.");
	}
	private volume = 10;
	private power = false;
	private name = "TV";

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

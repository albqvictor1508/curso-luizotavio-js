import type { DeviceImpl } from "../device";

export class RemoteControl {
	constructor(protected device: DeviceImpl) {}

	togglePower(): void {
		this.device.setPower(!this.device.getPower());
		console.log(
			`${this.device.getName()} está ${this.device.getPower() ? "ligado" : "desligado"}`,
		);
	}
}

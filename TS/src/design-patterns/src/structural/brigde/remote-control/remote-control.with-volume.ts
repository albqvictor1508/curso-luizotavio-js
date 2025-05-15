import { RemoteControl } from "./index";

export class RemoteControlWithVolume extends RemoteControl {
	public volumeUp(value: number): void {
		this.device.setVolume(this.device.getVolume() + value);
	}
	public volumeDown(value: number): void {
		this.device.setVolume(this.device.getVolume() - value);
	}
}

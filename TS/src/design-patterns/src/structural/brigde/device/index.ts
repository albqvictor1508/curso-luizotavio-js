export interface DeviceImpl {
	getName(): string;
	setName(name: string): void;
	getPower(): boolean;
	setPower(powerStatus: boolean): void;
	setVolume(volume: number): void;
	getVolume(): number;
}

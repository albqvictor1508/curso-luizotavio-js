import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import type { RemoteControl } from "./remote-control";
import type { RemoteControlWithVolume } from "./remote-control/remote-control.with-volume";

const main = (abstraction: RemoteControl | RemoteControlWithVolume) => {
	abstraction.togglePower();

	if (!("volumeUp" in abstraction)) return;
	abstraction.volumeUp(10);
	abstraction.volumeDown(5);
};

const tv = new Tv();
const radio = new Radio();

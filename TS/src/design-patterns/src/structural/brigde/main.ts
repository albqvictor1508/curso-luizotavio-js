import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control.with-volume";

const main = (abstraction: RemoteControl | RemoteControlWithVolume) => {
	abstraction.togglePower();

	if (!("volumeUp" in abstraction)) return;
	abstraction.volumeUp(10);
	abstraction.volumeDown(5);
};

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

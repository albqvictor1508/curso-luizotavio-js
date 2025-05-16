import { SystemUserProxy } from "./system-user-proxy";

const clientCode = async (): Promise<void> => {
	const user = new SystemUserProxy("victor");
	console.log(await user.getAdresses());
};

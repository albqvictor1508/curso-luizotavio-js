import type { UserAddress, UserProtocol } from "./user/user-protocol";

export class SystemUserProxy implements UserProtocol {
	constructor(public username: string) {}
	getAdresses(): Promise<UserAddress[]> {
		throw new Error("Method not implemented.");
	}
}

import type { UserAddress, UserProtocol } from "./user/user-protocol";

export class SystemUserProxy implements UserProtocol {
	private readonly user: UserProtocol | null = null;
	private readonly userAdresses: UserAddress[] | null = null;

	constructor(public username: string) {}
	getAdresses(): Promise<UserAddress[]> {
		throw new Error("Method not implemented.");
	}
}

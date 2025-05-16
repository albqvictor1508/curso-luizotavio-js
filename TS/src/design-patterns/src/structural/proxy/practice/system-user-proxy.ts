import { Admin } from "./admin";
import type { UserAddress, UserProtocol } from "./user/user-protocol";

export class SystemUserProxy implements UserProtocol {
	private user: UserProtocol | null = null;
	private userAdresses: UserAddress[] | null = null;

	constructor(public username: string) {}

	private createUser(): UserProtocol {
		if (this.user === null) {
			this.user = new Admin(this.username);
		}
		return this.user;
	}

	async getAdresses(): Promise<UserAddress[]> {
		const user = this.createUser();
		if (this.userAdresses === null) {
			this.userAdresses = await user.getAdresses();
		}
		return this.userAdresses;
	}
}

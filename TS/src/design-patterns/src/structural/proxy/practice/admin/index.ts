import type { UserAddress, UserProtocol } from "../user/user-protocol";

export class Admin implements UserProtocol {
	constructor(public username: string) {}

	async getAdresses(): Promise<UserAddress[]> {
		return new Promise<UserAddress[]>((resolve, reject) => {
			return setTimeout(() => {
				resolve([
					{ street: "Conjunto", number: 230 },
					{ street: "salve", number: 400 },
				]);
			}, 2_000);
		});
	}
}

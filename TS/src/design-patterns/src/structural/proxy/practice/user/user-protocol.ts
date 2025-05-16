export type UserAddress = { street: string; number: number };

export interface UserProtocol {
	username: string;

	getAdresses(): Promise<UserAddress[]>;
}

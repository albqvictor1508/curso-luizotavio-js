export type UserData = {
	id?: number;
	name: string;
	email: string;
	password: string;
};

export type UpdateUserSchema = {
	userId: number;
	user: UserData;
};

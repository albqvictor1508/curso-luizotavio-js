//let's go testing!!

import type { UpdateUserSchema, UserData } from "./types/user";

const users = [
	{
		id: 1,
		name: "test name",
		email: "salve@salve.com",
		password: "mypassword123",
	},
	{
		id: 2,
		name: "test name 2",
		email: "salve2@salve2.com",
		password: "mypassword1234",
	},
	{
		id: 3,
		name: "test name 3",
		email: "salve3@salve3.com",
		password: "mypassword12345",
	},
];

const addUser = (user: UserData & { id: number }) => {
	user.id = users.length;
	users.push(user);
};

const removeUser = (userId: number) => {
	const user = users.filter((u) => u.id === userId).shift() || "";
	if (!user) return;
	const userIndex = users.indexOf(user, 0);
	users.splice(userIndex, 1);
};

const updateUser = ({ userId, user }: UpdateUserSchema) => {
	const userExists = users.filter((u) => u.id === userId).shift() || "";
	if (!userExists) return;
	const userIndex = users.indexOf(userExists, 0);
	const newUser = users.splice(userIndex, 1).shift();
	console.log(newUser);
};

removeUser(3);
updateUser({
	userId: 1,
	user: {
		name: "new name",
		email: "new@email.com",
		password: "newpass",
	},
});

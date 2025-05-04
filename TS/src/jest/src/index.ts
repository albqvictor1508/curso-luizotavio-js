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

const updateUser = ({ userId, newUserData }: UpdateUserSchema) => {
	const user = users.filter((u) => u.id === userId).shift() || "";
	if (!user) return;
	const userIndex = users.indexOf(user, 0);
	let newUser = users.splice(userIndex, 1).shift();
	if (!newUser) return;
	//newUser = Object.assign(newUserData, { id: newUser.id }); dava certo tb
	newUser = { id: newUser.id, ...newUserData };
	users.push(newUser);
	console.log(users.sort((a, b) => a.id - b.id));
};

removeUser(3);
updateUser({
	userId: 1,
	newUserData: {
		name: "new name",
		email: "new@email.com",
		password: "newpass",
	},
});

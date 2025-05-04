//let's go testing!!

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

const addUser = (user: {
	id: number;
	name: string;
	email: string;
	password: string;
}) => {
	users.push(user);
};

const removeUser = (userId: number) => {
	const user = users.filter((u) => u.id === userId).shift() || "";
	if (!user) return;
	const userIndex = users.indexOf(user, 0);
};

removeUser(3);

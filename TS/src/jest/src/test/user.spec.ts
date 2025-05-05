import { addUser, removeUser, updateUser } from "../index";

//SUT = System under test (oque tá sendo testado)

//aprendi sobre a sintaxe, mas preciso aprender a criar testes

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

describe("add user route", () => {});

describe("update route", () => {
	it("should return a new user data", () => {
		const sut = updateUser({
			userId: 1,
			newUserData: {
				name: "salve",
				email: "salve@salve.com",
				password: "salve pass",
			},
		});

		expect(sut).toHaveProperty("id", 1);
		expect(sut).toHaveProperty("name", "salve");
		expect(sut).toHaveProperty("email", "salve@salve.com");
		expect(sut).toHaveProperty("password", "salve pass");
	});
});

describe("remove user route", () => {
	it("should have an userId", () => {
		const userIdParam = 1;
		expect(userIdParam).toBeGreaterThan(0);
	});

	it("should ensure that feature is working", () => {
		const userIdParam = 1;
		const userVerified = users.filter((u) => u.id === userIdParam).shift();
		if (!userVerified) return;
		expect(userVerified).toHaveProperty("id", 1);
		removeUser(userVerified.id);
	});
});

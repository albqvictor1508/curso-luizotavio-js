import { addUser, removeUser, updateUser } from "../index";

//SUT = System under test (oque tá sendo testado)

//aprendi sobre a sintaxe, mas preciso aprender a criar testes

describe("add user route", () => {
	it("should return null", () => {});
});

describe("update route", () => {
	it("should return a new user data", () => {
		const newUser = updateUser({
			userId: 1,
			newUserData: {
				name: "salve",
				email: "salve@salve.com",
				password: "salve pass",
			},
		});
		expect(newUser).not.toBeNull();
	});
});

describe("update route", () => {
	it("should return a new user data", () => {});
});

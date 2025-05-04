import { addUser, removeUser, updateUser } from "../index";

//SUT = System under test (oque tá sendo testado)

//aprendi sobre a sintaxe, mas preciso aprender a criar testesg

describe("add user route", () => {
	it("should return null", () => {});
});

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

		expect(sut).toHaveProperty("userId", 1);
		expect(sut).toHaveProperty("id", 1);
		expect(sut).toHaveProperty("name", "salve");
		expect(sut).toHaveProperty("email", "salve@salve.com");
		expect(sut).toHaveProperty("password", "salve pass");
	});
});

describe("update route", () => {
	it("should return a new user data", () => {});
});

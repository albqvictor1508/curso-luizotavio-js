// user.spec.ts => geralmente se usa spec para teste unitário e test para teste de integração

describe("user tests", () => {
	it("should return one", () => {
		const number = 1;
		expect(number).toBe(1);
	});
});

describe("user tests 2", () => {
	it("should return my name", () => {
		const myName = "my name";
		expect(myName).toBe("my name");
	});
});

describe("primitive values", () => {
	it("should test jest assertions", () => {
		const number = 10;

		expect(number).toBe(10);
	});
});

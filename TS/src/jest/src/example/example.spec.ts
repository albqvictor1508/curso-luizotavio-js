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
		expect(myName).toBe("my name"); //utiliza o Object.is, ou seja, em comparação com objetos, não é válido, pois mesmo com os mesmos valores, n é o mesmo objeto
	});
});

describe("primitive values", () => {
	it("should test jest assertions", () => {
		const number = 10;
		const salve = "";
		const salve2 = "salve";

		expect(number).toEqual(10); //dá pra ser usado com objetos
		expect(salve).toBeFalsy();
		expect(salve2).toBeTruthy();
		expect(number).toBeGreaterThanOrEqual(10);
		expect(number).toBeGreaterThan(9);
		expect(number).toBeLessThan(11);
		expect(number).toBeCloseTo(10.002); //número próximo
		expect(number).toBeNull();
		expect(number).toHaveProperty("toString"); //propriedade de objeto
	});
});

describe("more about objects", () => {
	it("should test objects assertion", () => {
		const person = { name: "victor", age: 18 };
		const person2 = { name: "victor", age: 18 };

		expect(person).toHaveProperty("email");
		expect(person).toHaveProperty("age", 18); //checa se tem a propriedade, e se o valor dela é igual a 18
		expect(person2).toEqual(person);
	});
});

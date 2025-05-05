// user.spec.ts => geralmente se usa spec para teste unitário e test para teste de integração

import { Discount } from "../discount";
import { ShoppingCart } from "../shopping-cart";

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
		const person2 = { name: "victor", age: 18 }; // expect(person).toHaveProperty("email");
		expect(person).toHaveProperty("age", 18); //checa se tem a propriedade, e se o valor dela é igual a 18
		expect(person2).toEqual(person);
	});
});
describe("testing spyOn", () => {
	afterEach(() => jest.clearAllMocks()); //depois que cada teste, os mocks são limpos

	//salve é um mock
	it("should spy something", () => {
		console.log("salve");
		const salve = () => {
			salve(); //console.log 1 vez
		};
		const salveSpy = jest.spyOn(console, "log"); // espiando o console.log() para ver se ele foi chamado
		expect(salveSpy).toHaveBeenCalledTimes(1); // é experado que ele seja chamado apenas 1 vez
		expect(salveSpy).toHaveBeenCalledWith("salve"); //conteúdo que será printado no console.log
	});
});

describe("example test with mocks", () => {
	const createDiscountMock = () => {
		class DiscountMock extends Discount {}
		return new DiscountMock();
	};

	const createCartItemMock = () => {};

	const createSut = () => {
		const discountMock = createDiscountMock();
		const sut = new ShoppingCart(discountMock);
		return { sut, discountMock };
	};

	it("should using mocks", () => {
		const { sut, discountMock } = createSut();
		expect(sut.isEmpty()).toBeTruthy();
	});
});

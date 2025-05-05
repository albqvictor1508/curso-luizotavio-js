// user.spec.ts => geralmente se usa spec para teste unitário e test para teste de integração

import { CartItemMock } from "../cart-item";
import { Discount } from "../discount";
import { ShoppingCartMock } from "../shopping-cart";

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
	const createDiscountMock = (): Discount => {
		class DiscountMock extends Discount {}
		return new DiscountMock();
	};

	const createCartItemMock = (
		name: string,
		price: number,
		qtd: number,
	): CartItemMock => {
		const cartItemMock = new CartItemMock(name, price, qtd);
		return cartItemMock;
	};

	const createSut = () => {
		const discountMock = createDiscountMock();
		const cartItemMock1 = createCartItemMock("salve", 1, 2);
		const cartItemMock2 = createCartItemMock("salve 2", 1, 10);
		const cartItemMock3 = createCartItemMock("salve 3", 1, 25.5);

		const sut = new ShoppingCartMock(
			discountMock,
			cartItemMock1,
			cartItemMock2,
			cartItemMock3,
		);
		return {
			sut,
			discountMock,
			cartItems: [cartItemMock1, cartItemMock2, cartItemMock3],
		};
	};

	it("should using mocks", () => {
		const { sut, discountMock, cartItems } = createSut();
		expect(sut.isEmpty()).toBeTruthy();
		expect(sut.getProducts()).toHaveLength(3);
	});

	it("should return total value", () => {
		const numbers = [1, 2, 3, 4, 5, 6];
		const test = numbers.reduce((count, value) => count + value);
		expect(test).toBeGreaterThanOrEqual(21);
	});

	it("should return total value with discount", () => {
		const { sut, cartItems, discountMock } = createSut();
		expect(sut.getTotalWithDiscount()).toBeGreaterThanOrEqual(3);
	});
});

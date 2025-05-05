import {
	type Discount,
	FiftyPercentDiscount,
	NoDiscount,
	TenPercentDiscount,
} from "../descount";

const createSut = (discount: new () => Discount): Discount => {
	return new discount();
};

describe("no discount", () => {
	it("should return value without discount", () => {
		const sut = createSut(NoDiscount);
		const value = sut.calculate(100);

		expect(value).toBeCloseTo(100);
	});
});

describe("10% discount", () => {
	it("should return a value with 10% descount", () => {
		const sut = createSut(TenPercentDiscount);
		const tenPercent = 10 / 100;

		expect(sut.calculate(100)).toBeCloseTo(100 * tenPercent);
	});
});

describe("50% discount", () => {
	it("should return a half value", () => {
		const sut = createSut(FiftyPercentDiscount);
		expect(sut.calculate(100)).toBeCloseTo(100 / 2);
	});
});

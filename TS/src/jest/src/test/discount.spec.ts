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

describe("10% discount", () => {});

describe("50% discount", () => {});

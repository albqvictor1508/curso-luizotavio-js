export abstract class Discount {
	abstract calculate(value: number): number;
}

class NoDiscount extends Discount {
	calculate(value: number): number {
		return value;
	}
}

class TenPercentDiscount extends Discount {
	private discount: number = 10 / 100;
	calculate(value: number): number {
		return value * this.discount;
	}
}

class FiftyPercentDiscount extends Discount {
	private discount: number = 50 / 100;
	calculate(value: number): number {
		return value * this.discount;
	}
}

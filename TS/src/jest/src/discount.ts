export abstract class Discount {
	private discount: number = 0;
	calculate(value: number): number {
		return value * this.discount;
	}
}

export class NoDiscount extends Discount {
	calculate(value: number): number {
		return value;
	}
}

export class TenPercentDiscount extends Discount {
	private discount: number = 10 / 100;
	calculate(value: number): number {
		return value * this.discount;
	}
}

export class FiftyPercentDiscount extends Discount {
	private discount: number = 50 / 100;
	calculate(value: number): number {
		return value * this.discount;
	}
}

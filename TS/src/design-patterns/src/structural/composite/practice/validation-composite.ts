export abstract class ValidateComponent<T> {
	abstract validate(value: T): boolean;
}

export class ValidateEmail extends ValidateComponent<string> {
	validate(value: string): boolean {
		return /@/.test(value);
	}
}

export class ValidateString extends ValidateComponent<unknown> {
	validate(value: unknown): boolean {
		if (typeof value !== "string") return false;
		return true;
	}
}

export class ValidateNumber extends ValidateComponent<number> {
	validate(value: number): boolean {
		return true;
	}
}

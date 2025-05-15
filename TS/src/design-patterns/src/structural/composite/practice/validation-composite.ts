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

export type ValidationGenericArray = ValidateComponent<
	string | number | unknown
>[];

export class ValidationComposite extends ValidateComponent<string> {
	private children: ValidationGenericArray = [];

	public add(...validate: ValidationGenericArray): void {
		for (const v of validate) {
			this.children.push(v);
		}
	}

	validate(value: unknown): boolean {
		for (const child of this.children) {
			if (!child.validate(value)) return false;
		}
		return true;
	}
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

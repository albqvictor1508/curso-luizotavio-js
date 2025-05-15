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

export class ValidationComposite extends ValidateComponent<string> {
	private children: ValidateComponent<string | number | unknown>[] = [];
	validate(value: unknown): boolean {
		for (const child of this.children) {
			if (!child.validate(value)) return false;
		}
		return true;
	}
}

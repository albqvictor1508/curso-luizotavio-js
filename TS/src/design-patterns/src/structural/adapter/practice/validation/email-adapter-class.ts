import type { EmailValidatorProtocol } from "./email-protocol";
import validator from "validator";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
	isEmail(value: string): boolean {
		return validator.isEmail(value);
	}
}

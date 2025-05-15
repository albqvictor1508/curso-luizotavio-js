import type { EmailValidatorProtocol } from "./validation/email-protocol";

const email = "email@email.com";

const validation = (
	emailValidator: EmailValidatorProtocol,
	value: string,
): boolean => {
	return emailValidator.isEmail(value);
};

import isEmail from "validator/lib/isEmail";

export const EmailValidatorAdapterFn = (value: string): boolean => {
	return isEmail(value);
};

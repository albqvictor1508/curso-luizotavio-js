export function isString(value: unknown): value is string {
	return typeof value === "string";
}

export const concat = <T extends string | null>(...args: Array<T>): string => {
	const concat: string = args.reduce((sum, value) => {
		if (!isString(value) && !isString(sum)) return "ta errado";
		// biome-ignore lint/style/useTemplate: <explanation>
		return sum + " " + value;
	}, "");
	return concat.split("").reverse().join("");
};

console.log(concat("leu", "me", "deu"));

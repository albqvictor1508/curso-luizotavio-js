/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["<rootDir>/src"],
	testMatch: ["**/*.spec.ts", "**/*.test.ts"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
};

//tava dando erro pela ausência do tsconfig e por ausência de opções aqui no jest config

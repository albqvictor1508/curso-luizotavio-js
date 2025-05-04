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

//tava dando erro porque uma dessas configs tava faltando e dando conflito quando eu executava, mas n sei qual opção

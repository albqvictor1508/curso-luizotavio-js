const path = require("node:path");

module.exports = {
	mode: "development",
	entry: "./src/webpack/segunda-forma.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
					options: { configFile: "tsconfig.frontend.json" },
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "frontend", "assets", "js"),
	},
	devtool: "source-map",
};

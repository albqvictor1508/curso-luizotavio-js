import "./db/index";
import { resolve } from "node:path";
import helmet from "helmet";
import cors from "cors";

import express from "express";
import TokenRoutes from "./routes/TokenRoutes";
import UserRoutes from "./routes/UserRoutes";
import homeRoutes from "./routes/HomeRoutes";
import AlunoRoutes from "./routes/AlunoRoutes";
import PhotoRoutes from "./routes/PhotoRoutes";
import TestRoute from "./routes/TestRoute";

const whitelist = [
	"http://localhost:3303",
	"http://localhost:5173/",
	"http://127.0.0.1:5173",
	"http://34.95.217.255:81/",
];

const corsOptions = {
	origin(origin, callback) {
		console.log(`ORIGIN: ${origin}`);
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			return callback(null, true);
		}

		return callback(new Error("not allowed by CORS"));
	},
};

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app;
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		console.log(
			"Caminho absoluto para imagens:",
			resolve(__dirname, "..", "uploads", "images"),
		);
		this.app.use(
			"/images/",
			express.static(resolve(__dirname, "..", "uploads", "images")),
		);
	}

	routes() {
		this.app.use("/", homeRoutes);
		this.app.use("/token", TokenRoutes);
		this.app.use("/user", UserRoutes);
		this.app.use("/student", AlunoRoutes);
		this.app.use("/photos/", PhotoRoutes);
		this.app.use("/test-image", TestRoute);
	}
}

export default new App().app;

import { Router } from "express";
import { resolve } from "node:path";
const router = new Router();

router.get("/test-image", (req, res) => {
	res.sendFile(
		resolve(
			__dirname,
			"..",
			"..",
			"uploads",
			"images",
			"1730040609775_15649.jpg",
		),
	);
});

export default router;

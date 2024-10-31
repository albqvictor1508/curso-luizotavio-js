"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _nodepath = require('node:path');
const router = new (0, _express.Router)();

router.get("/test-image", (req, res) => {
	res.sendFile(
		_nodepath.resolve.call(void 0, 
			__dirname,
			"..",
			"..",
			"uploads",
			"images",
			"1730040609775_15649.jpg",
		),
	);
});

exports. default = router;

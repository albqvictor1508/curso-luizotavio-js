"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router)();

//não deveriam existir, mas por enquanto vou manter para ter exemplo de CRUD
router.get("/", _UserController2.default.index);
router.post("/create", _UserController2.default.store);

router.get("/show/:id", _UserController2.default.show);
router.put("/update/", _loginRequired2.default, _UserController2.default.update);
router.delete("/delete/:id", _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

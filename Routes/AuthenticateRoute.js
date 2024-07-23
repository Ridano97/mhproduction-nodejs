const express = require("express");
const AuthenticateController = require("../Controllers/AuthenticateController");
const router = express.Router();

router.post("/login", (request, result) => AuthenticateController.login(request, result));
router.post("/loginentreprise", (request, result) => AuthenticateController.loginEntreprise(request, result));
router.post("/register", (request, result) => AuthenticateController.register(request, result));
router.post("/registerentreprise", (request, result) => AuthenticateController.registerEntreprise(request, result));

module.exports = router ; 
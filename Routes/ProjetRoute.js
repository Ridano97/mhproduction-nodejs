const express = require("express");
const ProjetController = require("../Controllers/ProjetController");
const router = express.Router();

router.get("/", (request, result) => ProjetController.GetAllProjet(request, result));

module.exports = router ; 
const express = require("express");
const EntrepriseController = require("../Controllers/EntrepriseController");
const router = express.Router();

router.get("/", (request, result) => EntrepriseController.GetAllEntreprise(request, result));

module.exports = router ; 
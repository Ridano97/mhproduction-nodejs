const express = require("express");
const EntrepriseController = require("../Controllers/EntrepriseController");
const router = express.Router();

router.get("/", (request, result) => EntrepriseController.getAllEntreprise(request, result));
router.get("/:id", (request, result) => EntrepriseController.getEntrepriseByID(request, result));
router.post("/", (request, result) => EntrepriseController.addEntreprise(request, result));
router.delete("/:id", (request, result) => EntrepriseController.removeEnteprise(request, result));
router.patch("/:id", (request, result) => EntrepriseController.updateEntreprise(request, result));

module.exports = router ; 
const express = require("express");
const ProjetController = require("../Controllers/ProjetController");
const router = express.Router();

router.get("/", (request, result) => ProjetController.getAllProjet(request, result));
router.get("/:id", (request, result) => ProjetController.getProjetByID(request, result));
router.post("/", (request, result) => ProjetController.addProjet(request, result));
router.delete("/:id", (request, result) => ProjetController.removeProjet(request, result));
router.patch("/:id", (request, result) => ProjetController.updateProjet(request, result));

module.exports = router ; 
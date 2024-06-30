
const express = require("express");
const PrestationTypeController = require("../Controllers/PrestationTypeController");
const router = express.Router();

router.get("/" , (request, result) => PrestationTypeController.getAllPrestationType(request, result));
router.get("/:id", (request, result) => PrestationTypeController.getPrestationTypeByID(request, result));
router.post("/", (request, result) => PrestationTypeController.addPrestationType(request, result));
router.delete("/:id", (request, result) => PrestationTypeController.removePrestationType(request, result))
router.patch("/:id", (request, result) => PrestationTypeController.updatePrestationType(request, result));

module.exports = router ;

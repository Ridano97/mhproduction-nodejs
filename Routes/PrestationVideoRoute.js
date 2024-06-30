const express = require("express");
const PrestationVideoController = require("../Controllers/PrestationVideoController");
const router = express.Router();


router.get("/", (request, result) => PrestationVideoController.getAllPrestationVideo(request, result));
router.get("/:id", (request, result) => PrestationVideoController.getPrestationVideoByID(request, result));
router.post("/", (request, result) => PrestationVideoController.addPrestationVideo(request, result));
router.delete("/:id", (request, result) => PrestationVideoController.removePrestationVideo(request, result));
router.patch("/:id", (request, result) => PrestationVideoController.updatePrestationVideo(request, result));

module.exports = router ;
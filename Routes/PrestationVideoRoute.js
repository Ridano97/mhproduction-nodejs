const express = require("express");
const PrestationVideoController = require("../Controllers/PrestationVideoController");
const router = express.Router();


router.get("/", (request, result) => PrestationVideoController.GetAllPrestationVideo(request, result));

module.exports = router ;
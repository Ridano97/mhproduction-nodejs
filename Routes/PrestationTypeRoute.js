
const express = require("express");
const PrestationTypeController = require("../Controllers/PrestationTypeController");
const router = express.Router();

router.get("/" , (request, result) => PrestationTypeController.getAllPrestationType(request, result));

module.exports = router ;

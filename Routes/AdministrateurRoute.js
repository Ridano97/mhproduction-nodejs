const express = require("express");
const AdministrateurController = require("../Controllers/AdministrateurController");
const router = express.Router();


router.get("/", (request, result) => AdministrateurController.GetAllAdministrateur(request, result));


module.exports = router ;
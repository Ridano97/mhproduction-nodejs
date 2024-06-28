const express = require("express");
const AdministrateurController = require("../Controllers/AdministrateurController");
const router = express.Router();


router.get("/", (request, result) => AdministrateurController.getAllAdministrateur(request, result));
router.get("/:id", (request,result) =>  AdministrateurController.getAdministrateurByID(request, result));
router.post("/", (request,result) => AdministrateurController.addAdministrateur(request, result));
router.delete("/:id", (request, result) => AdministrateurController.removeAdministrateur(request, result));
router.patch("/:id", (request, result) => AdministrateurController.updateAdministrateur(request, result)); 



module.exports = router ;
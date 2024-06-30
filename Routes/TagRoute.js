const express = require("express");
const TagController = require("../Controllers/TagController");
const router = express.Router();

router.get("/", (request, result) => TagController.getAllTag(request, result));
router.get("/:id" , (request, result) => TagController.getTagByID(request, result));
router.post("/", (request, result) => TagController.addTag(request,result));
router.delete("/:id", (request, result) => TagController.removeTag(request, result));
router.patch("/:id" , (request, result) => TagController.updateTag(request, result));

module.exports = router ; 
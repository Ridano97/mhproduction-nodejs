const express = require("express");
const TagController = require("../Controllers/TagController");
const router = express.Router();

router.get("/", (request, result) => TagController.getAllTag(request, result));

module.exports = router ; 
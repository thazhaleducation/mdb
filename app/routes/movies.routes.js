const express = require('express')
const router = express.Router()

const { moviesController } = require("../controllers");

router.get("/", moviesController.all);
router.get("/:name", moviesController.findByName);
router.post("/", moviesController.create);

module.exports = router
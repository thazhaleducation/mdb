const express = require('express')
const router = express.Router()

const { moviesController } = require("../controllers");

router.get("/", moviesController.all);
router.get("/:name", moviesController.findByName);
router.post("/", moviesController.create);
router.delete("/:name", moviesController.deleteByName);
router.put("/:id", moviesController.update);

module.exports = router
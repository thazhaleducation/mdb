const express = require('express')
const router = express.Router()

const { moviesController } = require("../controllers");

router.get("/", moviesController.all);

module.exports = router
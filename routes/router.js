const express = require("express");

const router = express.Router();

const homeController = require("../src/app/controllers/homeController");

router.get("/", homeController.getDollarPrice);

module.exports = router;

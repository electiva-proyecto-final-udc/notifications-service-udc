const express = require("express");
const router = express.Router();
const controller = require("../controllers/tecnicoController");

router.post("/register", controller.sendWelcomeEmail);

module.exports = router;

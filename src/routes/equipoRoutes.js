const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipoController");

router.post("/register", controller.equipmentRegistered);

module.exports = router;

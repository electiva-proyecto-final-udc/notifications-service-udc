const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipoController");

router.post("/registrar", controller.registrarEquipo);

module.exports = router;

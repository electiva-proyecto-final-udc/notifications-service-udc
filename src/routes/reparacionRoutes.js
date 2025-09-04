const express = require("express");
const router = express.Router();
const controller = require("../controllers/reparacionController");

router.post("/finalizar", controller.finalizarReparacion);
router.post("/reporte", controller.generarReporte);

module.exports = router;

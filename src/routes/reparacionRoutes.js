const express = require("express");
const router = express.Router();
const controller = require("../controllers/reparacionController");

router.post("/finishReparation", controller.finishReparation);
router.post("/report", controller.generarReporte);

module.exports = router;

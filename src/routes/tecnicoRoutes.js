const express = require("express");
const router = express.Router();
const controller = require("../controllers/tecnicoController");

router.post("/registrar", controller.registrarTecnico);

module.exports = router;

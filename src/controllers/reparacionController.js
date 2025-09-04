const ReparacionDTO = require("../dto/ReparacionDTO");
const reparacionService = require("../services/reparacionService");
const { generarReporte } = require("../utils/pdfGenerator");

exports.finalizarReparacion = (req, res) => {
  const { equipoId, descripcion, cliente } = req.body;
  const reparacion = new ReparacionDTO(equipoId, descripcion, cliente);
  const saved = reparacionService.save(reparacion);
  res.json({ status: "success", message: "Reparación finalizada", data: saved });
};

exports.generarReporte = (req, res) => {
  const { equipo, descripcion } = req.body;
  const reporte = generarReporte(equipo, descripcion);
  res.json({ status: "success", message: "Reporte generado", data: reporte });
};

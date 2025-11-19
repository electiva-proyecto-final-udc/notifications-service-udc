const { finishReparationService } = require("../services/reparacionService");

exports.finishReparation = async (req, res) => {
  try {
    await finishReparationService(req.body);
    res.json({ status: "success", message: "Reparación finalizada y correo enviado" });
  } catch (err) {
    console.error("ERROR finishReparation:", err);
    res.status(500).json({ error: "No se pudo procesar la notificación" });
  }
};


exports.generarReporte = (req, res) => {
  const { equipo, descripcion } = req.body;
  const reporte = generarReporte(equipo, descripcion);
  res.json({ status: "success", message: "Reporte generado", data: reporte });
};

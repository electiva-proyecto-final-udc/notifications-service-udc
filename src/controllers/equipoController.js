const { equipmentRegisteredService } = require("../services/equipmentService");

exports.equipmentRegistered = async (req, res) => {
  try {
    await equipmentRegisteredService(req.body);
    res.json({ status: "success", message: "Mantenimiento registrado" });
  } catch (err) {
    console.error("ERROR equipmentRegistered:", err);
    res.status(500).json({ error: "No se pudo enviar la notificación" });
  }
};

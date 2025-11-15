const notificationRepo = require("../repositories/notificationRepository");

exports.getNotifications = async (req, res) => {
  try {
    const data = await notificationRepo.findAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener notificaciones" });
  }
};

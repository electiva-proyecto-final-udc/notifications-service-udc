const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  personId: { type: String, required: true },       // quien envía
  toEmail: { type: String, required: true },        // a quien se envía
  notificationType: { type: String, required: true }, // nombre de la plantilla o tipo
  createdAt: { type: String, required: true }       // fecha ISO
});

module.exports = mongoose.model("Notification", notificationSchema);

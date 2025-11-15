const { generarReporte } = require("../utils/pdfGenerator");
const notificationRepository = require("../repositories/notificationRepository");

const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("../services/sendEmailService");

exports.finishReparation = async (req, res) => {
  try {
    const dto = new MailDTO({
      to: req.body.to,
      subject: "Reparación finalizada",
      templateName: "finishServiceEmail",
      templateData: {
        technicianName: req.body.technicianName,
        serviceNum: req.body.serviceNum,
        clientName: req.body.clientName,
        equipType: req.body.equipType,
        model: req.body.model,
        description: req.body.description,
        date: req.body.date,
        priority: req.body.priority
      },
      pdf: false
    });

    await notificationRepository.save({
      personId: dto.userId || "unknown",
      toEmail: dto.to,
      notificationType: "finishReparation",
      createdAt: new Date().toISOString()
    });

    await sendMail(dto);

    res.json({ status: "success", message: "Reparación finalizada" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo enviar el correo" });
  }
};

exports.generarReporte = (req, res) => {
  const { equipo, descripcion } = req.body;
  const reporte = generarReporte(equipo, descripcion);
  res.json({ status: "success", message: "Reporte generado", data: reporte });
};

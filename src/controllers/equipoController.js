const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("../services/sendEmailService");
const notificationRepository = require("../repositories/notificationRepository");

exports.equipmentRegistered = async (req, res) => {
  try {
    const dto = new MailDTO({
      to: req.body.to,
      subject: "Te han asignado un mantenimiento",
      templateName: "newServiceEmail",
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

    await sendMail(dto);
    await notificationRepository.save({
      personId: dto.userId || "unknown",
      toEmail: dto.to,
      notificationType: "newEquipment",
      createdAt: new Date().toISOString()
    });

    res.json({ status: "success", message: "Mantenimiento registrado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo enviar el correo" });
  }
};

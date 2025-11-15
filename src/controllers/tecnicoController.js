const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("../services/sendEmailService");
const notificationRepository = require("../repositories/notificationRepository");

exports.sendWelcomeEmail = async (req, res) => {
  try {
    const dto = new MailDTO({
      to: req.body.to,
      subject: "Bienvenido al sistema de Urgencias Domiciliarias del Café",
      templateName: "welcomeEmail",
      templateData: {
        username: req.body.username,
        password: req.body.password
      },
      pdf: false
    });

    await sendMail(dto);

    await notificationRepository.save({
      personId: dto.userId || "unknown",
      toEmail: dto.to,
      notificationType: "welcomeEmail",
      createdAt: new Date().toISOString()
    });

    res.json({ status: "success", message: "Correo enviado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo enviar la bienvenida" });
  }
};


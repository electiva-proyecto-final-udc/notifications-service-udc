const EquipoDTO = require("../dto/EquipoDTO");
const equipoService = require("../services/equipoService");
const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("../services/sendEmailService");

exports.equipmentRegistered = async (req, res) => {
  try {
    const dto = new MailDTO({
      to: req.body.to,
      subject: "Has creado un nuevo matenimiento",
      templateName: "welcomeEmail",
      templateData: {
        username: req.body.username,
        password: req.body.password
      },
      pdf: false
    });

    await sendMail(dto);

  res.json({ status: "success", message: "Mantenimiento registrado" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo enviar el correo" });
  }
};

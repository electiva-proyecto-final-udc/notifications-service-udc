const TecnicoDTO = require("../dto/TecnicoDTO");
const tecnicoService = require("../services/tecnicoService");
const { bienvenidaTecnico } = require("../utils/emailTemplates");

const MailDTO = require("../dto/MailDTO");
const { sendMail } = require("../services/sendEmailService");

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

    res.json({ status: "success", message: "Correo enviado"});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "No se pudo enviar la bienvenida" });
  }
};


// exports.registrarTecnico = (req, res) => {
//   const { nombre, usuario, correo, password } = req.body;
//   const tecnico = new TecnicoDTO(nombre, usuario, correo, password);
//   const saved = tecnicoService.save(tecnico);

//   const mensajeCorreo = bienvenidaTecnico(saved);

//   res.json({
//     status: "success",
//     message: "Técnico registrado",
//     data: saved,
//     correoSimulado: mensajeCorreo
//   });
// };



const TecnicoDTO = require("../dto/TecnicoDTO");
const tecnicoService = require("../services/tecnicoService");
const { bienvenidaTecnico } = require("../utils/emailTemplates");

exports.registrarTecnico = (req, res) => {
  const { nombre, usuario, correo, password } = req.body;
  const tecnico = new TecnicoDTO(nombre, usuario, correo, password);
  const saved = tecnicoService.save(tecnico);

  const mensajeCorreo = bienvenidaTecnico(saved);

  res.json({
    status: "success",
    message: "Técnico registrado",
    data: saved,
    correoSimulado: mensajeCorreo
  });
};



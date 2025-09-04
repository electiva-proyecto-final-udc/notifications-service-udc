const EquipoDTO = require("../dto/EquipoDTO");
const equipoService = require("../services/equipoService");

exports.registrarEquipo = (req, res) => {
  const { tipo, marca, modelo, numeroSerie, cliente, tecnicoAsignadoId } = req.body;
  const equipo = new EquipoDTO(tipo, marca, modelo, numeroSerie, cliente, tecnicoAsignadoId);
  const saved = equipoService.save(equipo);
  res.json({ status: "success", message: "Equipo registrado", data: saved });
};

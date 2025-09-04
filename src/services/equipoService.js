const equipoRepo = require("../repositories/equipoRepository");

exports.save = (equipo) => equipoRepo.save(equipo);
exports.findById = (id) => equipoRepo.findById(id);

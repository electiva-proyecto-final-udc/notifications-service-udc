const tecnicoRepo = require("../repositories/tecnicoRepository");

exports.save = (tecnico) => tecnicoRepo.save(tecnico);
exports.findById = (id) => tecnicoRepo.findById(id);

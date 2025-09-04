const reparacionRepo = require("../repositories/reparacionRepository");

exports.save = (reparacion) => reparacionRepo.save(reparacion);
exports.findById = (id) => reparacionRepo.findById(id);

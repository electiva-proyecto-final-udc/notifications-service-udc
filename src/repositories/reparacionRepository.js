const db = new Map();

exports.save = (reparacion) => {
  db.set(reparacion.id, reparacion);
  return reparacion;
};

exports.findById = (id) => db.get(id);

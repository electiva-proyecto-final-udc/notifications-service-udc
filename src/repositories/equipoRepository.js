const db = new Map();

exports.save = (equipo) => {
  db.set(equipo.id, equipo);
  return equipo;
};

exports.findById = (id) => db.get(id);

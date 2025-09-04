const db = new Map();

exports.save = (tecnico) => {
  db.set(tecnico.id, tecnico);
  return tecnico;
};

exports.findById = (id) => db.get(id);

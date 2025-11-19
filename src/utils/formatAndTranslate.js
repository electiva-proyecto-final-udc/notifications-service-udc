
function translateEquipmentType(type) {
  const map = {
    COMPRESSOR: "Compresor",
    GENERATOR: "Generador",
    PUMP: "Bomba"
  };

  return map[type];
}


function translatePriority(priority) {
  const map = {
    HIGH: "Alta",
    MEDIUM: "Media",
    LOW: "Baja"
  };

  return map[priority] ;
}

function translateStatus(status) {
  const map = {
    PENDING: "Pendiente",
    IN_PROGRESS: "En progreso",
    COMPLETED: "Completado",
    CANCELLED: "Cancelado"
  };

  return map[status] || status;
}

module.exports = {
  translateEquipmentType,
  translatePriority,
  translateStatus,
};

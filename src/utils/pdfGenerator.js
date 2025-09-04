exports.generarReporte = (equipo, descripcion) => {
  return {
    titulo: "Reporte de Reparación",
    equipo,
    descripcion,
    fecha: new Date().toISOString(),
  };
};

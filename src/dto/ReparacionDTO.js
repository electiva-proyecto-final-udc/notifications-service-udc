class ReparacionDTO {
  constructor(equipoId, descripcion, cliente) {
    this.id = Date.now().toString();
    this.equipoId = equipoId;
    this.descripcion = descripcion;
    this.cliente = cliente;
    this.fechaFinalizacion = new Date().toISOString();
  }
}
module.exports = ReparacionDTO;

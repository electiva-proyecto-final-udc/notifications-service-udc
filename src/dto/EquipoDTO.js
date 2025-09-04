class EquipoDTO {
  constructor(tipo, marca, modelo, numeroSerie, cliente, tecnicoAsignadoId) {
    this.id = Date.now().toString();
    this.tipo = tipo;
    this.marca = marca;
    this.modelo = modelo;
    this.numeroSerie = numeroSerie;
    this.cliente = cliente;
    this.tecnicoAsignadoId = tecnicoAsignadoId;
  }
}
module.exports = EquipoDTO;

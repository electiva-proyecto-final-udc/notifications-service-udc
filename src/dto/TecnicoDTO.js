class TecnicoDTO {
  constructor(nombre, usuario,correo, password) {
    this.id = Date.now().toString();
    this.nombre = nombre;
    this.usuario = usuario;
    this.correo = correo;
    this.password = password;
  }
}
module.exports = TecnicoDTO;

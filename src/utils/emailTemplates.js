exports.bienvenidaTecnico = (tecnico) => {
  return `
    Hola, bienvenido ${tecnico.nombre} 👋
    
    Tu usuario es: ${tecnico.usuario}
    Tu correo es: ${tecnico.correo}
    Tu contraseña es: ${tecnico.password}

    Ya puedes iniciar sesión en el sistema.
  `;
};

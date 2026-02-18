function buscarUsuario(id, callback) {
  console.log(`Buscando usuario con ID: ${id}...`);
  // Simulamos la demora de la red
  setTimeout(() => {
    const baseDeDatos = {
      '123': { nombre: 'Ana', email: 'ana@email.com' },
      '456': { nombre: 'Luis', email: 'luis@email.com' }
    };
    const usuario = baseDeDatos[id];
    if (usuario) {
      callback(null, usuario); // El primer argumento es para el error (null si no hay)
    } else {
      callback('Usuario no encontrado', id); // El primer argumento es el error
    }
  }, 4000);
}

let userbuscado = prompt("Ingrese el ID del usuario que requieres");

buscarUsuario(userbuscado, (error, usuario) => {
  if (error) {
    console.log(`el Usuario ${error} no fue encontrado`);
  } else {
    console.log('Usuario encontrado:', usuario);
  }
});

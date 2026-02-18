// --- 1. Los Datos ---
const listaDeInvitados = ['Ana', 'Luis', 'Carla'];

// --- 2. Las Funciones Callback (Las Acciones Específicas) ---

/**
 * Callback 1: Una función que saluda a una persona.
 */
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
saludar("Gabriel")
/**
 * Callback 2: Una función que escribe un nombre en mayúsculas.
 */
function gritarNombre(nombre) {
  console.log(`QUE QUERES ${nombre.toUpperCase()} !!! `);
}
gritarNombre("Fer")

function acompanante(nombre){
    console.log(` ${nombre} ¿Cómo se llama tu acompañante? `);
}

function despedida(nombre){
    console.log(`${nombre} Hasta luego`);
}




// --- 3. La Función Principal (La que recibe el callback) ---

function procesarLista(nombres, accion) {
  console.log('--- Iniciando procesamiento ---');
  for (const nombre of nombres) {
    // Aquí "llamamos de vuelta" a la función que nos pasaron como argumento.
    accion(nombre);
  }
  console.log('--- Procesamiento terminado ---');
}

// --- 4. La Ejecución ---

// Usamos la función principal con el primer callback (saludar)
procesarLista(listaDeInvitados, saludar);

console.log('\n********************************\n'); // Un separador para mayor claridad

// Volvemos a usar la misma función principal, pero ahora con el segundo callback (gritarNombre)
procesarLista(listaDeInvitados, gritarNombre);

procesarLista(listaDeInvitados, acompanante);

procesarLista(listaDeInvitados, despedida);
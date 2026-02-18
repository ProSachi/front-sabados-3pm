/* console.log('Pedido 1: Tomado');
setTimeout(function() {
  console.log('Pedido 2: Plato complejo listo');
}, 2000);
console.log('Pedido 3: Limonada servida');
 */

// 'callback' es un parámetro que espera recibir una función.
function procesarDatos(datos, callback) {
  console.log('Procesando los datos...');
  // Simulamos un proceso que toma tiempo.
  setTimeout(function() {
    const datosProcesados = datos.map(d => d.toUpperCase());
    // Cuando terminamos, ejecutamos la función que nos pasaron.
    callback(datosProcesados);
  }, 5000);
}

const misDatos = ['manzana', 'pera'];

// Llamamos a la función y le pasamos otra función como último argumento.
procesarDatos(misDatos, function(resultado) {
  console.log('El resultado final es:', resultado);
});




/* // SINTAXIS ANTIGUA
const nombre2 = usuario.nombre;
const nombre3 = usuario["direccion"]["pais"]
const ciudad = usuario.direccion.ciudad;
console.log(nombre2);
console.log(nombre3);
console.log(ciudad); */

/* const usuario = {
  id: 1,
  nombre: "Ana",
  email: "ana@email.com",
  direccion: { ciudad: "Madrid", pais: "España" } // Objeto anidado
};

// DESESTRUCTURACIÓN (NUEVA)
// 1. Extraemos 'nombre' y 'email'.
// 2. Extraemos 'ciudad' del objeto anidado 'direccion' y la renombramos a 'ciudadUsuario'.
const { nombre, email, direccion: { ciudad: ciudadUsuario } } = usuario;

console.log(nombre); // "Ana"
console.log(ciudadUsuario); // "Madrid"
 */


/* const frutas = ["Manzana", "Pera"];
const copiaFrutas = [...frutas]
const nuevasFrutas = [...frutas, "Uva"];
frutas[2] = "Piña" */
/* console.log(copiaFrutas);
console.log(nuevasFrutas); */

//Find: Recorre el arreglo y devuelve el primer elemento 
/* const frutaEncontrada = copiaFrutas.find( fruta => {
  return fruta === "Pera";
});
console.log(frutaEncontrada); */

// Crea un nuevo arreglo con los resultados de la llamada a la función indicada 

/* const numeros = [1,2,3,4,5,6,7,8,9]
const nuevosNums = numeros.map( (numero) => numero * 2 );
console.log(nuevosNums); */


/* const estudiantes = [112, 34, 56, 27, 38, 19,]
const hayMenores = estudiantes.every((estudiante) => {
    return estudiante > 18;
});
console.log(hayMenores); */

const ventas = [112, 34, 56, 27, 38, 19]
const totalVentas = ventas.reduce( (acumulador, ventaActual) => {
  return acumulador + ventaActual;
}, 0 ); 

console.log(totalVentas);


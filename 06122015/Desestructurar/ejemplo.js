
/* const carrito = [
  { id: 1, prod: 'Camisa', precio: 50000, disponible: true },
  { id: 2, prod: 'Pantalón', precio: 80000, disponible: false }, // Agotado
  { id: 3, prod: 'Zapatos', precio: 120000, disponible: true },
];

const disponibles = carrito.filter( item => item.disponible === true );
const mensajes = disponibles.map( ({ prod, precio }) => {
  return `El producto ${prod} cuesta $${precio}`;
});
console.log(mensajes); 
const totalPagar = disponibles.reduce( (acc, item) => acc + item.precio, 0 );
console.log(`Total a pagar: $${totalPagar}`); // 170000
 */

const carrito2 = [
  { id: 1, prod: 'Camisa', precio: 50000, disponible: true },
  { id: 2, prod: 'Pantalón', precio: 80000, disponible: false }, // Agotado
  { id: 3, prod: 'Zapatos', precio: 120000, disponible: true },
];

const final = carrito2.filter( item => item.disponible === true)
.map(item => item.precio - (item.precio * 0.1))
.reduce((acc, item) => acc + item, 0)

console.log(final);
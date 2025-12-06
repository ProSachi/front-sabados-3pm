console.log("Foreach");

const numeros = [1, 2, 3];
numeros.forEach(function(numero) {
    console.log(`El elemento ${numero}`);
});
console.log("Foreach con flecha");
numeros.forEach((numero) => {
    console.log(`El elemento ${numero}`);
});

console.log("Map");
const numeros2 = [1, 2, 3];

const dobles = numeros2.map(function(numero) {
    return numero * 2;
});
console.log(dobles); 

const dobles2 = numeros2.map(numero => numero * 2); 
console.log(dobles2);
console.log(numeros2);

let muchosNumeros = [1, 2, 3, 4, 5, 6]
console.log("Filter");
const pares = muchosNumeros.filter(patito => patito % 2 != 0); 
console.log(pares);


console.log("reduce");
const carrito = [10, 25, 15, 50];
const total = carrito.reduce((sumaTotal, precioActual) => sumaTotal + precioActual, 0); 
console.log(total);
// El 0 es el valor inicial de sumaTotal
// total es 100




let edad = prompt("Ingresa una edad");
let precioEntrada;
let mensaje;

if (edad < 12) {
    mensaje = "La entrada cuesta 5$"
} else if (edad <= 17) {
    mensaje = "La entrada cuesta 8$"
} else if (edad <= 64) {
    mensaje = "La entrada cuesta 12$"
} else {
    mensaje = "La entrada cuesta 6$"
}
console.log(mensaje)



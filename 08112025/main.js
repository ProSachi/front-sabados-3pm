/* function sumar(a, b) {
    let suma = a + b;
    console.log(`suma es: ${suma}`);
}

function restar(a, b) {
    let restar = a - b;
    console.log(`restar es: ${restar}`);
}

function multiplicar(a, b) {
    let multiplicar = a * b;
    console.log(`multiplicar es: ${multiplicar}`);
}

function dividir(a, b) {
    if (b === 0) {
        console.log(`El número no puede ser igual a cero`);
    } else if (a === 0) {
        dividir = 0;
    } else {
        let dividir = a / b;
        console.log(`dividir es: ${dividir}`);
    }
}

function pedirNumero() {
    let numero = parseInt(prompt("Ingresa un numero"));
    return numero
}


let condicion = true

do {
    let operacion = prompt(`Selecciona la operación que deseas realizar:
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividir
    5 Salir`)

    let numero1 = pedirNumero();
    let numero2 = pedirNumero();

    switch (operacion) {
        case "1":
            sumar(numero1, numero2);
            break;
        case "2":
            restar(numero1, numero2);
            break;
        case "3":
            multiplicar(numero1, numero2);
            break;
        case "4":
            dividir(numero1, numero2);
            break;
        case "5":
            condicion = false
            break;
        default:
            break;
    }
} while (condicion);
 */


/* function saludarPersonalizado(nombre = "Usario no Registrado") { // 'Invitado' es el valor por defecto
  console.log(`¡Hola, ${nombre}!`);
}

saludarPersonalizado("María"); // Salida: ¡Hola, María!
saludarPersonalizado();        // Salida: ¡Hola, Invitado! (no se pasó argumento, usa el defecto)
 */

/* function sumar (a,b){
    let sumar = a + b;
    console.log(sumar);
}

sumar(2, 4)

function sumar2(a,b) {
    let sumar = a + b;
    return sumar;
}
let operacion;
operacion = sumar2(2,4)

console.log(operacion); */
alert("Formulario de Registro")
let nombre = prompt("DIme tu nombre: ")
let apellido = prompt("DIme tu apellido: ")
let correo = prompt("DIme tu correo: ")
let contrasena = prompt("DIme tu contraseña: ")
console.log("usuario registrado ");


let correoCorrecto = "prueba@correo.com"
let contrasenaCorrecto = "12345"
let acumuladorLogeo = 0;
alert("Formulario de logeo");
correo = prompt("Dime tu correo: ");
contrasena = prompt("Dime tu contraseña: ");
console.log("usuario registrado ");


if (correoCorrecto === correo && contrasenaCorrecto === contrasena) {
    console.log("Bienvenido al sistema");
} else {
    console.log("Login Incorrecto");
    acumuladorLogeo++;
    clg("usuario")
}
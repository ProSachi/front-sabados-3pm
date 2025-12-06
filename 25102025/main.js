/* let diaSemana = "LUNES"
switch (diaSemana.toLowerCase()) {
  case "lunes":
    console.log("Inicio de semana laboral.");
    break; // ¡No olvides el break!
  case "martes":
    console.log("Día de reunión de equipo.");
    break;
  case "viernes":
    console.log("¡Casi fin de semana!");
    break;
  default:
    console.log("Es otro día de la semana.");
} */


    
/* let edad = 20;

// Forma if...else (Verborrágica)
let mensaje;
if (edad >= 18) {
  mensaje = "Es mayor de edad";
} else {
  mensaje = "Es menor de edad";
}
console.log(mensaje);

// Forma Ternaria (Concisa y Moderna)
const mensajeTernario = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
//                      (condición)  ?   (valor si true)  :   (valor si false)
console.log(mensajeTernario); */


let password = prompt("Escribe una contraseña")
if (password.length < 8) {
  alert(`Error: La contraseña es demasiado corta (mínimo 8 caracteres). ${password}`);
} else {
  console.log("Contraseña aceptada.");
  console.log(password);
}

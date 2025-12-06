/* function sumar(a, b) {
    let resultado = a + b;
    return resultado;
} */

/* 
let elResultado = sumar(10, 6);
console.log(elResultado); */

/* const opeSumar = function(a,b){
    let resultado = a + b;
    return resultado;
} */

/* let resultado = opeSumar(5, 10); 
console.log(resultado); */
/* const miBoton = document.getElementById("btnimprimir");
const inputNombre = document.getElementById("nombreinput");
const inputContrasena = document.getElementById("contrasenainput");
let usuarioReal = "admin";
let contrasenaReal = "1234";


// Le pasamos una función anónima como segundo argumento.
// Esta función se ejecutará SÓLO cuando ocurra el 'click'.
miBoton.addEventListener("click", function() {
const usuario = inputNombre.value.trim();
const contrasena = inputContrasena.value.trim();

  if (usuarioReal === usuario && contrasenaReal === contrasena) {
    console.log("Bienvenido al Sistema");
  } else {
    console.log("Credenciales incorrectas");
  }
}); */

/* const sumar = (a, b) => a + b;


function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}  */

/*     // Guardamos una función anónima en la variable 'multiplicar'
const multiplicar = function(a, b) {
  return a * b;
};

// Guardamos otra en 'dividir'
const dividir = function(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir por cero";
  }
  return a / b;
};

// Las usamos
console.log( "Multiplicación (5x7):", multiplicar(5, 7) );
console.log( "División (10/2):", dividir(10, 2) );
console.log( "División (10/0):", dividir(10, 0) ); */

//Refactorizando a Funciones Flecha (Sintaxis Moderna) Ahora, reescribamos las mismas funciones usando la sintaxis de flecha.
/* 
const multiplicar = (a, b) => a * b;
const sumas = (a, b) => a + b;
const restas = (a, b) => a - b;

const dividir = (a, b) => {
  if (b === 0) {
    return "Error: no se puede dividir por cero";
  }
  return a / b;
}; */

/* console.log( "División (10/2):", dividir(10, 2) );
console.log( "Sumas (10/5):", sumas(10, 5) ); */


/* function ejecutarCalculo(num1, num2, funcionOperacion) {
  
  // 1. Recibe los números y la FUNCIÓN.
  console.log("Ejecutando un cálculo...");
  
  // 2. ¡Llama a la función que recibió como argumento!
  //    y le pasa los números.
  const resultado = funcionOperacion(num1, num2);
  
  // 3. Retorna el resultado.
  return resultado;
}


let paquete1 = ejecutarCalculo(7, 3,restas)
console.log(paquete1);

console.log(ejecutarCalculo(7, 3,sumas)); */

/* 

// Le pasamos la *variable* que *contiene* la función 'sumar'
let resultadoSuma = ejecutarCalculo(20, 10, sumar);
console.log(resultadoSuma); // Output: 30

// Le pasamos la *variable* 'restar'
let resultadoResta = ejecutarCalculo(20, 10, restar);
console.log(resultadoResta); // Output: 10

// Le pasamos la *variable* 'dividir'
let resultadoDiv = ejecutarCalculo(20, 0, dividir);
// Output: ¡No se puede dividir por cero!
// Output: null
 */

/* let resultadoMult = ejecutarCalculo(7, 5, function(a, b) {
  return a * b;
});
console.log(resultadoMult); // Output: 35 */


const saludar = nombre =>"¡Hola, " + nombre + "!";




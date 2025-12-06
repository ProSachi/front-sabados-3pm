


/* cantidadEstudiantes = parseInt(prompt(`Cuantos estudiantes quieres validar?`)) */

/* console.log(typeof(cantidadEstudiantes));
console.log(cantidadEstudiantes); */

/* for (let i = 1; i <= cantidadEstudiantes; i++) {
    let nota;
    let cantidadEstudiantes;
    nota = prompt(`Ingresa la nota del estudiante ${i}`)
    if (nota >= 3) {
        console.log("El estudiante aprueba");
    } else {
        console.log("El estudiante no aprueba");
    }
} */
/* let condition = true;

while (condition) {
    let respuesta = parseInt(prompt(`Lee las siguiente opciones:
        1. Ingresar un nombre
        2. Ingresar un apellido
        3. Ingresar un signo zodiacal
        4. Ingresar un color favorito
        5. Ingresa 5 para salir
        `))

let respuestaCase; 
    switch (respuesta) {
        case 1:
            respuestaCase = prompt(`Ingresa un nombre`)
            alert(`El nombre ingresado es ${respuestaCase}`);
            break;

        case 2:
            respuestaCase = prompt(`Ingresa un apellido`)
            alert(`El apellido ingresado es ${respuestaCase}`);
            break;

        case 3:
            respuestaCase = prompt(`Ingresa un signo zodiacal`)
            alert(`El signo zodiacal ingresado es ${respuestaCase}`);
            break;

        case 4:
            respuestaCase = prompt(`Ingresa un color`)
            alert(`El color favorito  ingresado es ${respuestaCase}`);
            break;
        case 5:
            alert(`Has seleccionado 5, adios pues`);
            condition = false;
            break;

        default:
            alert(`Seleccione una opción correcta`);
            break;
    }


} */

/* 
let condition = false;
do {
    let operacion = prompt(`Lee las siguientes opciones y escribe el número de preferencias:
        1. Desear Sumar?
        2. Desea Restar?
        3. Desea Salir?`)
    let numero1, numero2;
    let resultado;
    switch (operacion) {
        case `1`:
            numero1 = parseInt(prompt(`Ingrese el primer número: `))
            numero2 = parseInt(prompt(`Ingrese el segundo número: `))
            resultado = numero1 + numero2
            alert(`El resultado de la suma es ${resultado}`)
            break;
        case `2`:
            numero1 = parseInt(prompt(`Ingrese el primer número: `))
            numero2 = parseInt(prompt(`Ingrese el segundo número: `))
            resultado = numero1 - numero2
            alert(`El resultado de la resta es ${resultado}`)
            break;
        case `3`:
            alert(`Has elegido el camino del mal, adios.`)
            condition = true;
            break;
        default:
            break;
    }

} while (!condition); */

const miArray = ['manzana', 'banana', 'naranja'];

// El 'for...of'
for (const pepe of miArray) {
  // 'fruta' toma el VALOR de cada elemento en cada vuelta
}

const persona = {
  nombre: 'Ana',
  edad: 30,
  profesion: 'Doctora',
  miArray: ['manzana', 'banana', 'naranja'],
  direccion: {
    casa: "familiar",
    interio:"308"
  }
};


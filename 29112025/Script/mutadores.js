// Un arreglo de strings
let playlist = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'];

// Un arreglo de números
let calificaciones = [10, 9, 8, 7, 10];

// Un arreglo mixto (¡es posible, pero menos común!)
let datosMixtos = ['Ana', 28, true, null];
                //  0      1   2     3

let estudiantes = [`chacon`, "Andres", 'yis'];

console.log(estudiantes[1]);
estudiantes[1] = "Santiago" // Actualizando la posición
console.log(estudiantes);

console.log(estudiantes.length);

estudiantes.push("Miguel")

console.log("push, agregar un elemento al final");
console.log(estudiantes);
console.log(estudiantes.length);

console.log("pop, eliminar el ultimo elemento");
estudiantes.pop();
console.log(estudiantes);
console.log(estudiantes.length);

console.log("Unshift, agregar un elemento al inicio, costoso");
estudiantes.unshift("Fer");
console.log(estudiantes);
console.log(estudiantes.length);

console.log("shift, eliminar un elemento al inicio, costoso");
estudiantes.shift();
console.log(estudiantes);
console.log(estudiantes.length);

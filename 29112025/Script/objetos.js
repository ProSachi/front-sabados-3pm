const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: { // Un objeto puede contener otro objeto
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    // Los objetos pueden tener funciones (métodos)
    saludar: function() {
        console.log('¡Hola mundo!');
    }
};
console.log(usuario.nombre);
usuario.username = 'carlos_rdz';
console.log(usuario.username);

const { nombre, edad, cursos } = usuario;



const misCalificaciones = [10, 9, 8, 7];
const [santi, yis] = misCalificaciones;


// Podemos ignorar elementos con una coma vacía
const [,, miguel] = misCalificaciones;
console.log(miguel); // 8


let productos = [
  { id: 1, nombre: 'leche' },
  { id: 2, nombre: 'pan' },
  { id: 3, nombre: 'huevos' }
];

let productoEncontrado = productos.find(function(producto) {
  return producto.id === 2;
});

console.log(productoEncontrado.nombre);

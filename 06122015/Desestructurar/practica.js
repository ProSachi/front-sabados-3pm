const estudiantes = [
    { nombre: "Juan", notas: [3.5, 4.0, 3.8] },
    { nombre: "Maria", notas: [2.0, 2.5, 3.0] },
    { nombre: "Pedro", notas: [4.5, 4.8, 5.0] }
];


const estudiantesConPromedio = estudiantes.map((estudiante) => {
    // Calculamos la suma de sus notas internas
    const sumaNotas = estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    console.log(promedio);
    // Retornamos un NUEVO objeto copiando el anterior y agregando el promedio
    return {
        ...estudiante, // Spread operator para copiar nombre y notas
        promedio: promedio.toFixed(g) // Agregamos la nueva propiedad
    };
});

const aprobados = estudiantesConPromedio.filter(est => est.promedio >= 3.0);

aprobados.forEach( ({ nombre, promedio }) => {
  console.log(`El estudiante ${nombre} aprobó con ${promedio}`);
});

console.log(estudiantesConPromedio);

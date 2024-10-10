//! Ejemplo de Sergio para crear --> matriz

const matrizCalificaiones = [
    [3,5,9], // Calificaciones estudiantes número 1
    [2,3,4], // Calificaciones estudiantes número 2
    [9,8,9] // Calificaciones estudiantes número 3
]
for (let i = 0; i < matrizCalificaiones.length; i++){
    for(let j = 0; j < matrizCalificaiones[i].length; j++){
        console.log(`Estudiante ${i+1} con la asignatura ${j+1} y la nota ${matrizCalificaiones[i][j]}`) // matriz/primerArray/primerElementoDelArray
    }
}

//! ----------------------------- //

/* Tienes una matriz que representa las calificaciones de varios estudiantes en 
diferentes asignaturas. Debes calcular la suma de las calificaciones para cada 
estudiante y almacenarlas en un nuevo array. */

const calificaciones = [
    [6, 8, 9], // estudiante 1
    [8, 9, 7], // estudiante 2
    [8, 7, 6], // estudiante 3
    [8, 6, 9], // estudiante 4
];

const sumaCalificaciones = []; // nuevo array que almacenará las sumas de las calificaciones de cada estudiante.

// Iterar sobre la matriz de calificaciones
for (let i = 0; i < matrizCalificaiones.length; i++) {
    let suma = 0; // Variable para acumular la suma de las calificaciones de un estudiante
    for (let j = 0; j < matrizCalificaiones[i].length; j++) {
                // Sumar cada calificación del estudiante
        suma += matrizCalificaiones[i][j];
        console.log(`Estudiante ${i + 1} con la asignatura ${j + 1} y la nota ${matrizCalificaiones[i][j]}`);
    }
    // Almacenar la suma total en el array de sumaCalificaciones
    sumaCalificaciones.push(suma);
}
console.log(`La suma de las calificaciones por estudiantes:`, sumaCalificaciones);

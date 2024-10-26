//! Ejercicio 1: Implementar .forEach()

/* Descripción: Escribe tu propio método .myForEach(callback) que recorra cada elemento de un array y ejecute una función (callback) sobre él.

//* --> Pista: 
Usa un bucle for para iterar sobre cada elemento.
La función callback recibe tres argumentos: el elemento actual, el índice y el array completo.
Ejemplo: */

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    }
};

  // Prueba
[1, 2, 3].myForEach((elemento, indice) =>
    console.log(`Elemento: ${elemento}, Índice: ${indice}`)
);


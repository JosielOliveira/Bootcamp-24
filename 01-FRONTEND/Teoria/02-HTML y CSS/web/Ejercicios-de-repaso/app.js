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
["perros", "gatos", "tortugas"].myForEach((elemento, indice) =>
    console.log(`Elemento: ${elemento}, Índice: ${indice}`)
);


//! Ejercicio 2: Implementar .map()

/* Descripción: Crea un método .myMap(callback) que recorra el array, aplique la función callback a cada elemento, y retorne un nuevo array con los resultados.

//* --> Pista: 
Necesitarás crear un array vacío al inicio.
Usa un bucle for y callback para transformar cada elemento.
Al final, devuelve el nuevo array.
Ejemplo: */

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
    }
    return result;
};

  // Prueba
  const duplicado = [1, 2, 3].myMap((elemento) => elemento * 2);
  console.log(duplicado); // [2, 4, 6]
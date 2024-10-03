//! EJERCICIO 1 ---> Buscar el máximo

/* Completa la función que tomando dos números como argumento devuelva el más alto. */

function getMax(numberOne, numberTwo) {
    return Math.max(numberOne, numberTwo);
}

console.log(Math.max(10, 20)); // 20


//! EJERCICIO 2 ---> Buscar la palabra más larga

/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = " ";

  for (let word of param) {
    if (word.length > longestWord.length) {
        longestWord = word;

    }
}
return longestWord; 
}

console.log(findLongestWord(avengers)); // Captain A.


//! EJERCICIO 3 ---> Calcular la suma

/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función: */

const numbers1 = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
    let sum = 0; 
    for (let number of param) {
        sum += number; 
        }
        return sum;
    } 
    console.log(sumAll(numbers1)); // 151


    //! EJERCICIO 4 ---> Calcular el promedio

   /* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numeros = [12, 21, 38, 5, 45, 37, 6];
function promedio(param) {
    const suma = param.reduce((acumulador, numero) => acumulador + numero, 0)

    const promedio = suma / param.length;

    return promedio; 

}

console.log(promedio(numeros));


let contador = 0;

const intervalId = setInterval(() => {
    console.log(`Contador: ${contador}`);
    contador++;

    }
, 1000);


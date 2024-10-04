//! EJERCICIO 1 (Funciones) ---> Buscar el máximo

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

console.log(promedio(numeros)); // 23.4


//! EJERCICIO 5 ---> Calcular promedio de strings


/* Crea una función que reciba por parámetro un array y cuando es un valor 
number lo sume y de lo contrario cuente la longitud del string y lo sume. 
Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let totalLength = 0;
    let wordCount = 0;

    param.forEach(element => {
        if (typeof element === 'string') {
            totalLength += element.length; // Suma la longitud de las palabras
            wordCount++; // Incrementa el conteo de palabras
        }
});

return totalLength / wordCount; // Calcula el promedio
}

console.log(averageWord(mixedElements)); // 5 --> Promedio de la longitud de las palabras


//! EJERCICIO 6 ---> Valores únicos

/* Crea una función que reciba por parámetro un array y compruebe si 
existen elementos duplicados, en caso que existan los elimina para retornar un array 
sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(param) {
    return [...new Set(param)]; // Elimina los duplicados usando el objeto Set
}
console.log(removeDuplicates(duplicates)); // ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']

//todo --> RESOLUCION DE BEA:
// creo la función con un parámetro --> e será igual a un array elegido en la llamada a la función
function removeDuplicates(e) {
    // creo un array vacío
    const unicos = [];
    // al array (e) le aplico un bucle forEach
    // item se refiere a cada elemento del array
    e.forEach(item => {
        // si el array NO (!) incluye el item por el que pasa el forEach, entonces meye el item en el array unicos
        if (!unicos.includes(item)) {
            unicos.push(item); // solo añade el elemento si no está ya en el array
        }
    })

    /* EXPLICACIÓN FOR EACH
    
    unicos = []
    1er elemento 'sushi' está incluido en unicos? No ---> lo pusheamos en unicos
    unicos = ['sushi']
    2 elemento 'pizza' está incluido en unicos? No ---> lo pusheamos en unicos
    unicos = ['sushi', 'pizza']
    3 elemento 'pizza' está incluido en unicos? Si ---> entonces no hacemos nada, pasa al siguiente elemento
    unicos = ['sushi', 'pizza']
    Y ASI CON TODOS LOS ELEMENTOS DEL ARRAY */

    // la función removeDuplicates devuelve el array unicos final, después de haber hecho todo el proceso del forEach
    return unicos;
}

console.log(removeDuplicates(duplicates)); //! imprime el array sin los duplicados

//si quiero usar ese array unicos el otro sitio, lo meto en una variable para poder usarlo
// en esa variable llamaremos a la función funcion(array)
const unicosFueraDeLaFuncion = removeDuplicates(duplicates);
console.log(unicosFueraDeLaFuncion);

/*
    [
        'sushi',   'pizza',
        'burger',  'potatoe',
        'pasta',   'ice-cream',
        'chicken', 'onion rings',
        'soda'
    ]
*/


// Poner todos los elementos del el nuevo array sin duplicados en mayúscula
const unicosMayus = unicosFueraDeLaFuncion.map((e) => {
    return e.toUpperCase();
})
console.log(unicosMayus);

/* 
        [
            'SUSHI',   'PIZZA',
            'BURGER',  'POTATOE',
            'PASTA',   'ICE-CREAM',
            'CHICKEN', 'ONION RINGS',
            'SODA'
        ]
*/


//! EJERCICIO 7 ---> Buscador de nombres

/* Crea una función que reciba por parámetro un array y el valor que desea 
comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
en caso que existan nos devuelve un true y la posición de dicho elemento y por 
la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
// una función con dos parámetros -> uno va a ser el array (e) y otro los valores a comprobar (name)
function finderName(e, name) {
    // uso un bucle for para pasar por cada elemento del array
        // i = 0 ---> el bucle empieza en el primer elemento del array
        // i < e.length ---> recorre toda la longitud del array, repite el bucle tantas vecez como elementos tenga el array
        // i++ ---> va de uno en uno, no se salta ningún elemento
    for (let i = 0; i < e.length; i++) {
        // hace este condicional en cada elemento del array por el que ejecuta el bucle
        // e[i] === name ---> array[posicion] === name (name es el nombre que voy a buscar)
            // la condición el if dice ---> si en la posición que sea i en cada momento está el nombre que busco entonces...
                // { inArray: true, position: i } ---> devuelve un objeto que nos indica si el name está en el array y la posición que ocupa
                // si no está, devuelve { inArray: false } ---> un objeto que indica que no está en el array, es false
        if (e[i] === name) {
        // output ---> si está en el array
        return { inArray: true, position: i };
        }
    }
    // output ---> si no está en el array
    return { inArray: false };
}

console.log(finderName(nameFinder, 'Uma')); //! { inArray: false }
console.log(finderName(nameFinder, 'Marc')); //! { inArray: true, position: 10 }

// OTROS POSIBLES OUTPUT DEL CONDICIONAL

    // PARA TRUE --> return `La persona ${name} está en el array (${true}) en la posición ${i}`;
        //? La persona Uma no está en el array (false)
    // PARA FALSE ---> return `La persona ${name} no está en el array (${false})`;
        //? La persona Marc está en el array (true) en la posición 10


//! EJERCICIO 8 ---> Contador de repeticiones

/* Crea una función que nos devuelva el número de veces que se repite cada una de 
las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

// función con parámetro e que se refiere al array
function repeatCounter(e) {
    // creamos una variable contador que en inicio es un objeto
    const contador = {};
    console.log(contador); //! {}
    
    // con un bucle forEach que tiene dentro una función con un parñametro 'palabra' que se refiere a cada elemento del array
    e.forEach(palabra => {
        console.log(palabra); //! devuelve todas las palabras
        
        // usamos como clave cada palabra del array
        // tanto si está la palabra como si su valor es 0 (no está todavía en el objeto) se suma +1 a su valor
        // va creado un objeto cuyas claves son las palabras y el valor de cada uno es lo que se repite la palabra
            // queda así {palabra : numero}
        contador[palabra] = (contador[palabra] || 0) + 1; // suma el contador
    });

    // nos devuelve el objeto contador con todos los resultados que ha ido almacenando gracias al bucle
    return contador;
}

const palabrasRepetidas = repeatCounter(counterWords);
console.log(palabrasRepetidas);

// Esto es 'contador' que es lo que devulde la función después del return
/* 
        {
            code : 4,
            repeat : 1,
            eat : 1,
            sleep : 2,
            enjoy : 2,
            upgrade : 1,
        }
 */
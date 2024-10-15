//! EJERCICIO 1 --> Usa includes

/* Haz un bucle y muestra por consola todos aquellos valores del 
array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

/* Paso 1 --> Entender el problema: Queremos recorrer cada elemento del array products y mostrar solo los que contengan la 
palabra "Camiseta". Para hacer esto, voy utilizar un bucle y la función .includes() de JavaScript. */
/* Paso 2 --> Crear un bucle  que recorra el array products. Esto lo haré con un for */

for (let i = 0; i < products.length; i++) {
    console.log(products[i]); // muestra cada producto en la consola
}

/* Paso 3 --> Usar .includes() para buscar "Camiseta"
Ahora que tenemos el bucle, necesitamos verificar si cada elemento contiene la palabra 
"Camiseta". Para eso, usamos el método .includes(): */

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
        console.log(products[i]); // Esto mostrará solo los productos que contienen la palabra "Camiseta"
    }
}


//! EJERCICIO 2 --> Condicionales avanzados

/* Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y 
añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas 
compruébalo con un console.log.  */

/* Entender el problema: revisar los trimestres de cada alumno y ver si han 
aprobado al menos dos de ellos. Según el resultado, hay que añadir la propiedad isApproved 
como true o false para cada alumno. */

/* Paso 1 --> recorrer el array de alumns para poder revisar cada alumno. Usaré un 
bucle forEach para hacerlo de forma sencilla: */

/* Paso 2 --> Para cada alumno, debemos verificar si ha aprobado al menos dos de los 
trimestres (T1, T2, T3). Esto lo podemos hacer usando un contador que aumente cada 
vez que uno de los trimestres sea true: */

/* Paso 3 --> Ahora, si el contador de trimestres aprobados es mayor o igual a 2, 
añado la propiedad isApproved como true, de lo contrario, la establezco en false: */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach(alumno => { 
    let aprobados = 0;

    if (alumno.T1) aprobados++;
    if (alumno.T2) aprobados++;
    if (alumno.T3) aprobados++;

    alumno.isApproved = aprobados >= 2;
    console.log(alumns);
});

/* Paso 4 --> Mostrar los resultados con console.log Una vez que hemos recorrido todos los alumnos 
y añadido la propiedad isApproved, mostramos el array alumns para verificar el resultado: */




//! EJERCICIO 3 --> Probando For...of

/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log 
sus valores. Puedes usar este array: */

/* Paso 1--> Entender el bucle for...of: Se utiliza para recorrer elementos de un array de 
manera sencilla, asignando cada elemento a una variable en cada iteración del bucle. */

/* Paso 2--> Crear y definir el array que contiene los destinos: */

const placesToTravel1 = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

/* Paso 3 --> Usar el bucle for...of para recorrer cada destino del array placesToTravel 
usando for...of e imprimir en la consola: */

for (const place of placesToTravel1) {
    console.log(place);
    
}


//! EJERCICIO 4 --> Probando For...in

/* Usa un for...in para imprimir por consola los datos del alienígena.. 
Puedes usar este objeto: */

/* Paso 1 --> entender el bucle for...in: se utiliza para recorrer las propiedades de un 
objeto. En cada iteración, asigna a la variable el nombre de una propiedad del objeto. */

/* Paso 2 --> Crear el objeto alien que contiene los datos del alienígena: */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

/* Paso 3 --> Usar el bucle for...in: Usar el bucle for...in para recorrer cada 
propiedad del objeto alien e imprimir tanto la clave como el valor en la consola: */

for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
    
}

/* Conclusion --> for (const key in alien): Esto significa que, en cada iteración del bucle, la variable key tomará el nombre de una propiedad del objeto alien.
console.log(${key}: ${alien[key]}): Imprime el nombre de la propiedad (key) seguido de su valor (alien[key]`). */


//! EJERCICIO 5 --> Probando For

/* Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que 
tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array: */

/* Paso 1 --> Entender el problema: Tengo un array de objetos llamado placesToTravel.
Cada objeto representa un destino con un id y un name.
tengo que eliminar del array los objetos que tengan id 11 y id 40. */

/* Paso 2 --> Crear el array placesToTravel que contiene los destinos */

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
];

/* Paso 3 --> Recorrer el array con un bucle for: Usaré un bucle for para iterar sobre cada 
destino y buscar los que tienen id 11 y 40. Para eliminar elementos de un array mientras lo 
recorremos, es mejor hacerlo en sentido inverso (de atrás hacia adelante), ya que así 
evitamos problemas de reindexación al eliminar elementos. */

/* Paso 4 --> Eliminar elementos con id 11 y 40: Para eliminar un elemento de un array, 
usaremos el método .splice(), que nos permite quitar un elemento del array en una posición 
específica. */

for (let i = placesToTravel.length -1; i >= 0; i--) {
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);        
    }
}

console.log((placesToTravel));

/* Conclusion --> for (let i = placesToTravel.length - 1; i >= 0; i--): El bucle recorre el array desde el último índice (placesToTravel.length - 1) hasta el primero (i >= 0).
if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40): Comprueba si el id del destino actual es 11 o 40.
placesToTravel.splice(i, 1): Si la condición se cumple, elimina el elemento en la posición i usando .splice(). El 1 indica que queremos eliminar solo un elemento. */


//! EJERCICIO 6 --> Mixed For...of e includes 

/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la 
palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.
Puedes usar este array: */

/* Paso 1 --> Declarar el array dado */

const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
] 

/* Paso 2 --> Crear un nuevo array para almacenar los juguetes que NO incluyan la palabra 
"gato": A medida que recorremos el array toys, si un juguete no contiene la palabra "gato" 
en su propiedad name, lo agregaremos al nuevo array. */

const filteredToys = [];

/* Paso 3 --> Recorrer el array con for...of: Vamos a usar for...of para recorrer cada 
objeto del array toys. */

for (const toy of toys) {
        // Aquí evaluaremos cada juguete. Lo copio al siguiente paso:
}

/* Paso 4 --> Comprobar si el nombre del juguete incluye la palabra "gato": Usamos el método 
.includes() para verificar si el nombre del juguete contiene la palabra "gato".
Si el nombre NO incluye "gato", agregamos ese juguete al array filteredToys.*/

for (const toy of toys) {
    if (!toy.name.includes('gato')) {
        filteredToys.push(toy);
    }
}

console.log(filteredToys);


//! EJERCICIO 7 --> For...of avanzado

/* Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 
15 ventas (sellCount) al array popularToys. Imprimelo por consola.. 
Puedes usar este array: */

/* OBJETIVO --> El objetivo es recorrer un array de objetos usando un bucle for...of y 
agregar aquellos objetos cuyo sellCount sea mayor a 15 al array popularToys. Luego, 
imprimiremos el resultado por consola. */

/* Paso 1 --> Declarar el array de juguetes y el array vacío popularToys: 
toys1 contendrá los juguetes con sus propiedades.
popularToys será el array donde almacenaremos los juguetes que tengan más de 15 ventas. */

const popularToys = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

/* Paso 2 --> Recorrer el array toys1 con un bucle for...of: 
Usaremos for...of para iterar sobre cada objeto (juguete) en toys1. */

for (const toy of toys1) {
    // Aquí evaluaremos cada juguete. Lo copio al siguiente paso:
}

/* Paso 3 --> Comprobar si sellCount es mayor a 15:
Usaremos una condición if para verificar si la propiedad sellCount del juguete es mayor a 15.
Si cumple la condición, lo añadimos al array popularToys usando push(). */ 

for (const toy of toys1) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

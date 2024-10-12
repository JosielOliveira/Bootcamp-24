//! EJERCICIO 1 --> Usa includes

/* Haz un bucle y muestra por consola todos aquellos valores del 
array que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

/* Paso 1: Entender el problema: Queremos recorrer cada elemento del array products y mostrar solo los que contengan la 
palabra "Camiseta". Para hacer esto, voy utilizar un bucle y la función .includes() de JavaScript. */
/* Paso 2: Crear un bucle  que recorra el array products. Esto lo haré con un for */

for (let i = 0; i < products.length; i++) {
    console.log(products[i]); // muestra cada producto en la consola
}

/* Paso 3: Usar .includes() para buscar "Camiseta"
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

/* Paso 1: recorrer el array de alumns para poder revisar cada alumno. Usaré un 
bucle forEach para hacerlo de forma sencilla: */

/* Paso 2: Para cada alumno, debemos verificar si ha aprobado al menos dos de los 
trimestres (T1, T2, T3). Esto lo podemos hacer usando un contador que aumente cada 
vez que uno de los trimestres sea true: */

/* Paso 3: Ahora, si el contador de trimestres aprobados es mayor o igual a 2, 
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

/* Paso 4: Mostrar los resultados con console.log Una vez que hemos recorrido todos los alumnos 
y añadido la propiedad isApproved, mostramos el array alumns para verificar el resultado: */




//! EJERCICIO 3 --> Probando For...of

/* Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log 
sus valores. Puedes usar este array: */

/* Paso 1: Entender el bucle for...of: Se utiliza para recorrer elementos de un array de 
manera sencilla, asignando cada elemento a una variable en cada iteración del bucle. */

/* Paso 2: Crear y definir el array que contiene los destinos: */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

/* Paso 3: Usar el bucle for...of para recorrer cada destino del array placesToTravel 
usando for...of e imprimir en la consola: */

for (const place of placesToTravel) {
    console.log(place);
    
}


//! EJERCICIO 4 --> Probando For...in




//! EJERCICIO 5 --> Probando For



//! EJERCICIO 6 --> Mixed For...of e includes 



//! EJERCICIO 7 --> For...of avanzado



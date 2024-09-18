//! ---------- OPERADORES --------- //

//? --- Operador de asignación =
// sirve para asignar o reasignar un valor a una variable


let nombre = "Laura";
nombre = nombre + "apellido";
nombre = "Uma Thurman"
console.log(nombre);

//? ---- Operador aritmético + - * / %
// JS acepta numeros enteros decimales y negativos

let  numero = 10;

/*console.log (n + 2); // 12 --> suma
console.log (n - 12); // -2 --> resta
console.log (n * 5); // 50 --> multiplicacion
console.log (n / 2); // 5 --> division
console.log(n % 3); // 3,333333 --> resto de la division el signo de porcentaje no es porciento*/

//* se pueden mezclar los operadores aritméticos con el operador de asignacion
// se puede usar += -= *= /= %=

n += 3;
console.log(n); // 13 es lo mismo que hacer ---> n = n + 3


//? Operadores de comparación == === < >

//* nos da como resultado un resultado booleano ---> true o false o es o no es
/* 
== ---> compara el valor de los datos y nos dice si tienen el mismo valor
=== ---> compara el valor de los datos y nos dice si tienen el mismo valor y si son del mismo tipo
< ---> comprueba si un dato es mayor que otro
>  ---> comprueba si un dato es menor que otro 
*/

let x = 2;
let y = "2";
let z = 1; 

console.log(x == y); // true --> mismo valor, distinto tipo de dato
console.log(x ==z); // false
console.log(y < z); // false
console.log(x === y); // --> no tiene el mismo tipo de dato, si el mismo valor
console.log(true == false); // false --> no tiene el mismo valor
console.log(true === false); // false --> no tiene mismo valor, si mismo tipo de dato
console.log(true == 1); // true --> mismo valor, los dos son 1
console.log(true === 1); // false --> uno es boolean y el otro es number, aunque mismo valor



//* este operador ! es NOT, niega algo ---> sustituimos un = por la negacion !
// != ---> distinto valor
// !== ---> distinto tipo de dato

console.log(x != y); // false --> x es distinto de y? NO --> mismo valor
console.log(x !== y); // true --> mismo valor y distinto tipo
console.log(x !== z); // true --> mismo tipo y distinto valor

// EXTRA

console.log(1 == 1 ); // valor --> true 
console.log(1 === 1); // valor y tripo --> true
console.log(1 == "1"); // valor --> tiene el mismo valor
console.log(1 === "1"); // valor y tipo --> false

console.log(1 != 1); // distinto valor --> false
console.log(1 != 2); // distinto valor --> true
console.log(1 !== 1); // distinto valor y tipo --> false 
console.log(1 !== "1"); //  distinto valor y tipo --> true 

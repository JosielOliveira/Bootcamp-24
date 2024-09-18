// crear todo lo anterior 


//! ------------- TYPE OF () --------------- //

// metodo que nos dice qué tipo de dato es lo que queremos saber

let forma = "redonda";
console.log(typeof forma)

let datos = {
    nombre : "Josiel"


}

//! ---------- USANDO OPERADOR + CON STRING Y NUMBER -------------- //
/* cuando usamos el operador + con number y string se hace una conversion del tipo
de dato se llama "type coertion" y da como resultado un string, funcina como una 
encadenacion de cadenas de texto

si sumamos dos o varios datos booleanos nos da como resultado la suma final, de 1
y 0, y un tipo de dato number

si hay mas de una operacion y tenemos que calcular el resultado el ordenador hace las 
operacion una a una, va por pasos
primero hace una y luego la siguiente y en la ultima nos da el resultado
*/

console.log(5 + 5); // 10  ---> number
console.log("hola" + "hola"); // holamundo ---> string
console.log(2 + "hola")  

//! --- OS DE TIOPS DE DATO PRIMITIVO --- /

//? toLowerCase() --> convertir a minusculas una cade ne texto

let mayuscula = "HOLA";
console.log(mayuscula.toLowerCase()); // "hola"

//? toUpperCase() --> convertir a mayusculas una cade ne texto
let minuscula = "adios";
console.log(minuscula.toUpperCase()); // "ADIOS

//? tiFixed() --> redondea en enteros o decimales segun le indiquemos

let numero = 10.692347;
console.log(numero.toFixed()); // --> redondea a 11 
console.log(numero.toFixed(3)); // --> devuelve el numero con 3 decimales y lo redondea ej: 10.692

// EJERCICIO ---> formar una frase con las tres variables

let a = "me llamo Pepito";
let b = "estudio veterinaria";
let c = "y tengo 20 años";

let frase = 

console.log ()

// usamos `` para poder encapsular con ${variable} variables y unirlas
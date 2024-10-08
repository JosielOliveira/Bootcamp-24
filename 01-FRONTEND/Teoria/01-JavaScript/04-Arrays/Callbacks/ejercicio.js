//! EJERCICIO!!

//? Opcion 1
/* Crea una función que procese la edad de un usuario y determine si es mayor o menor de edad. 
La función debe recibir el nombre y la edad del usuario, así como un callback para 
manejar el resultado. El callback debe recibir el nombre del usuario y un mensaje indicando 
“mayor de edad” o “menor de edad”, y mostrar el resultado en la consola. 
Utiliza esta función para verificar la edad de al menos dos usuarios, 
uno mayor de edad y uno menor.

 */

function edadUsuario(nombre, edad, callback) {
    const mensaje = edad >= 18 ? `mayor de edad` : `menor de edad`;
    callback(nombre, mensaje);
}

function mostrarMensaje(nombre, mensaje) {
    console.log(`${nombre} es ${mensaje}.`);
}

edadUsuario("Amanda", 8, mostrarMensaje) // Amanda es menor de edad.
edadUsuario("Katle", 41, mostrarMensaje) // Katle es mayor de edad.
edadUsuario("Josiel", 41, mostrarMensaje) // Josiel es mayor de edad.

//? Opcion 2
/* Crea una función que procese la edad de un usuario y determine si es mayor o menor de edad. 
La función debe recibir el nombre y la edad del usuario, así como un callback para 
manejar el resultado. El callback debe recibir el nombre del usuario y un mensaje indicando 
“mayor de edad” o “menor de edad”, y mostrar el resultado en la consola. 
Utiliza esta función para verificar la edad de al menos dos usuarios, 
uno mayor de edad y uno menor.

 */

function edadUsuario(nombre, edad, callback) {
    let mensaje;
    if (edad >= 18) {
        mensaje = 'mayor de edad';
    } else {
        mensaje = 'menor de edad';
    }
    callback(nombre, mensaje);
}

function mostrarResultado(nombre, mensaje) {
    console.log(`${nombre} es ${mensaje}.`);
}

edadUsuario("Amanda", 8, mostrarMensaje) // Amanda es menor de edad.
edadUsuario("Katle", 41, mostrarMensaje) // Katle es mayor de edad.
edadUsuario("Josiel", 41, mostrarMensaje) // Josiel es mayor de edad.


function sumar(n1, n2) {
    return n1 + n2;
}
console.log(sumar(375, 375));

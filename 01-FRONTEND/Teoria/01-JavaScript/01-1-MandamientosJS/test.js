let original = "NAME";

let changed = original.toLocaleLowerCase();
console.log(changed);
console.log(original);


//! Sintaxis básica de una función
function saludar(nombre) {
console.log("Hola," + nombre + "!");
}
saludar("Josiel");


//! Funciones con valores de retorno

function sumar(a, b) {
    return a + b;
}


let resultado = sumar(3, 4);
console.log(resultado);

//! Funciones anónimas

const saludar = function(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludar("Josiel");


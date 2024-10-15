//! CALCULADORA SERGIO

// Desarrollador una calculadora super simple
function multiplicar(num1, num2) {
    return num1 * num2
}
// Añadir metodos de operaciones a el objeto calculadora
const calculadora1 = {
    sumar: "sumar", restar: "restar", dividir:"dividir", multiplicar
}

//! MI CALCULADORA
// Objeto calculadora con métodos de operaciones: 

const calculadora = {
    sumar,
    restar,
    dividir,
    multiplicar
};

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir entre cero"
    }
    return num1 / num2;
} 

// Usando la calculadora: 
console.log(calculadora.sumar(10, 2));
console.log(calculadora.restar(10, 2));
console.log(calculadora.multiplicar(10, 2));
console.log(calculadora.dividir(10, 2));

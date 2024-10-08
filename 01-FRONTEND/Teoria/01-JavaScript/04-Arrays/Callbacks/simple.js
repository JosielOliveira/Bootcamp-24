// Definición de la función que ejecuta una acción con un callback
function accionDePersona(callback) {
    const nombre = 'Sergio';
    callback(nombre);
}

// Función para saludar
function saludar(nombre) {
    console.log(`Hola, soy ${nombre}`); 
}

// Función para despedir
function despedir(nombre) {
    console.log(`Adiós, ${nombre}`);
}
accionDePersona(saludar); // Hola, Sergio
accionDePersona(despedir); // Adiós, Sergio

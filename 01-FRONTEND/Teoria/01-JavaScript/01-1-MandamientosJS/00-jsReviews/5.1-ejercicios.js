//! Ejercicio 1: Clase `Vehiculo` (Nivel Básico)

/* Objetivo Practicar la creación de clases, métodos y el uso de `this`.

Instrucciones

1. Crea una clase llamada `Vehiculo`.
2. El constructor debe recibir dos propiedades: `marca` y `modelo`.
3. Agrega un método `detalles()` que muestre en la consola la marca y el modelo del vehículo (ejemplo: "Marca: Toyota, Modelo: Corolla").
4. Crea dos instancias de la clase `Vehiculo` y llama al método `detalles()` para cada una.

Código de ejemplo

javascript */

class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;  
  }

detalles() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
  }
}

const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Honda", "Civic");

vehiculo1.detalles(); // Marca: Toyota, Modelo: Corolla
vehiculo2.detalles(); // Marca: Honda, Modelo: Civic


//! Ejercicio 2:

/* Clase `Usuario` con Métodos para el DOM (Nivel Intermedio)

Objetivo: Practicar la manipulación del DOM usando clases.

Instrucciones:

1. Crea una clase `Usuario`.
2. El constructor debe recibir `nombre`, `edad` y `email`.
3. Agrega un método `mostrarInfo()` que cree un elemento `<div>` en el DOM. Este div debe mostrar el nombre, la edad y el email del usuario.
4. Crea una instancia de `Usuario` y llama al método `mostrarInfo()` para añadir la información del usuario al DOM.

Código de ejemplo:

```javascript */

// Archivo HTML básico
/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejercicio Usuario</title>
</head>
<body>
  <h1>Usuarios</h1>
  <script src="script.js"></script>
</body>
</html>
*/

// Código JavaScript
class Usuario {
  // Tu código aquí
}

// Ejemplo de uso
const usuario1 = new Usuario("Ana", 25, "ana@example.com");
usuario1.mostrarInfo(); // Agrega la información al DOM
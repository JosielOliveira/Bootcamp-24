//! Método push() aplicado al array animals

const animals = ['pigs', 'goats', 'sheep'];

// Añado 'cows' al array y guardo la nueva longitud en la variable count.
const count = animals.push('cows');
console.log(count); // 4

console.log(animals); // [ 'pigs', 'goats', 'sheep', 'cows' ]

// Agrega 'chickens', 'cats' y 'dogs' al array.
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


// Quiero añadir un nuevo animal a la lista de animales
// Modifico el array --> añado horse a la list de animales.
function addAnimal(animal) {
    animals.push(animal);
    console.log(`Hañado un nuevo animal: ${animal}`); // Se añadió un nuevo animal: horse

    console.log(`Lista actualizada de animales: ${animals}`); // Lista actualizada de animales: ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs", "horse"]

}

addAnimal('horse');

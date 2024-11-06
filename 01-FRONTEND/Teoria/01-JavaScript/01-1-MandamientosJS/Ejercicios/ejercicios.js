/* Aquí tienes tres ejercicios detallados que exploran diversas operaciones con strings, 
basados en los ejemplos que mencionaste. Estos ejercicios ayudarán a los estudiantes a 
aplicar y combinar métodos de concatenación, modificación, búsqueda y extracción de strings.


Ejercicio 1: Formatear y verificar un nombre completo

Enunciado:

Imagina que tienes dos variables, `firstName` y `lastName`, que contienen el nombre y 
apellido de una persona. Tu tarea es crear una función `formatName()` que haga lo siguiente:

1. Concatenar `firstName` y `lastName` en un solo string llamado `fullName`, usando 
template literals.
2. Convertir `fullName` a mayúsculas y guardarlo en una nueva variable `upperName`.
3. Verificar si el string `upperName` contiene la palabra "SKYWALKER".
4. Si `upperName` contiene "SKYWALKER", imprimir `"¡Es un Skywalker!"`.
5. Si no contiene "SKYWALKER", imprimir `"No es un Skywalker"`. */

// Paso 1: Crear la función
// Paso 2: Concatenar firstName y lastName en fullName usando Template Literals
// Paso 3: Convertir fullName a mayúsculas y guardarlo en upperName
// Paso 4: Verificar si upperName contiene la palabra "SKYWALKER"


function formatName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    let upperName = fullName.toUpperCase();

    if (upperName.includes("SKYWALKER")) {
        console.log("¡Es un Skywalker!");
}       else {
    console.log("No es un Skywalker");
    
    }
}

formatName("josiel", "Oliveira");
formatName("Josiel", "Skywalker")

/* //!Ejercicio 2: Modificar y limpiar una frase de bienvenida

Enunciado:

Tienes un string `welcomeMessage` que contiene una frase de bienvenida con espacios al 
principio y al final. También contiene la palabra "Force" en minúsculas y deseas 
estandarizarla. Crea una función `cleanMessage()` que haga lo siguiente:

1. Eliminar los espacios al principio y al final del string usando `.trim()`.
2. Reemplazar todas las apariciones de la palabra "Force" por "Force" en mayúscula 
(usando `.replaceAll()`).
3. Convertir la primera letra de cada palabra a mayúscula y el resto a minúsculas.
4. Imprimir el mensaje limpio y formateado. */

// Paso 1: Crear la función cleanMessage
// Paso 2: Definir welcomeMessage y usar .trim() para eliminar espacios al principio y al final
// Paso 3: Reemplazar "Force" por "FORCE" usando .replaceAll()
// Paso 4: Convertir la primera letra de cada palabra a mayúscula
// Paso 5: Imprimir el mensaje limpio y formateado


function cleanMessage() {
    let welcomeMessage = " ¡Bienvenido a force! "
    let cleanedMessage = welcomeMessage.trim();
    let formattedMessage = cleanedMessage.replaceAll("force", "FORCE");

    let titleCaseMessage = formattedMessage
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    console.log(titleCaseMessage); 
}

cleanMessage();



//! Ejercicio 2.1: Extraer y reestructurar datos de una lista de personajes

/* Enunciado: 

Tienes una lista de nombres de personajes en formato CSV, guardada en la variable `charactersCSV`. Tu tarea es crear una función `processCharacters()` que:

1. Divida el string `charactersCSV` en un array de nombres, usando `.split(",")`.
2. Verifique si el array contiene el nombre "Yoda".
3. Si el nombre "Yoda" está en la lista, reemplázalo con "Master Yoda" en el array.
4. Vuelva a unir el array en un string separado por guiones ("-") usando `.join("-")`.
5. Imprima el resultado final. */ 

// Paso 1: Dividir el string en un array
// Paso 2: Verificar si el array contiene "Yoda"
// Paso 3: Reemplazar "Yoda" con "Master Yoda"
// Paso 4: Unir el array en un string separado por guiones

function processCharacters() {
    let charactersCSV = "Luke,Leia,Josiel Skywalker,Han,Yoda";
    let characterArray = charactersCSV.split(",");
    if (characterArray.includes("Yoda")){
        let yodaIndex = characterArray.indexOf("Yoda");
        characterArray[yodaIndex] = "Master Yoda";
    }
    let result = characterArray.join(" - ");
    console.log(result);
    
}
processCharacters();


//? MÁS EJERCICIOS A PARTIR DEL 3:
//! Ejercicio 3 

const starWarsInfo = {
    movie: {
      title: "A New Hope",
      release_year: 1977,
      director: "George Lucas",
      characters: {
        main: {
          name: "Luke Skywalker",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
        },
        villain: {
          name: "Darth Vader",
          homeworld: "Tatooine",
          species: "Human",
          allies: ["Emperor Palpatine"],
        },
      },
    },
  };
  
  


// Enunciado
// Queremos acceder al nombre del director de la película.

function director(data) {
    const nameDirector = data.movie.director; 
    console.log(nameDirector);

}
director(starWarsInfo);

//! Ejercicio 4

/* Ejercicio 1: Listar todas las películas y sus años de estreno**
Enunciado
Queremos crear una función que imprima cada título de película y su 
año de estreno en la consola. */

const starWarsData = {
  characters: [
    { name: "Luke Skywalker", height: 172, mass: 77, species: "Human" },
    { name: "Darth Vader", height: 202, mass: 136, species: "Human" },
    { name: "Yoda", height: 66, mass: 17, species: "Unknown" },
  ],
};

//! Ejercicio 5

/* Cambiar la especie de Darth Vader a "Sith" si su nombre es "Anakin Skywalker"
Enunciado 
Queremos cambiar la especie de Darth Vader a "Sith", pero solo si su nombre es "Anakin 
Skywalker". */

function actualizarEspecie(info) {
    const villain = info.movie.characters.villain;
    if (villain.name === "Anakin Skywalker") {
        villain.species = "Sith";
    }
}

actualizarEspecie(starWarsInfo)
console.log("🚀 ~ starWarsData:", starWarsInfo)


//! Ejercicio 6 

/* Cambiar el estatus de Darth Vader y añadir un nuevo aliado a Luke Skywalker
Enunciado
Queremos actualizar algunos datos en el JSON starWarsInfo si se cumplen ciertas condiciones. Aquí están los requisitos específicos:
Cambiar el species de Darth Vader a "Sith Lord" y añadir "Boba Fett" a su lista de aliados, pero solo si su name es "Darth Vader" y su homeworld es "Tatooine".
Si Luke Skywalker tiene un aliado llamado "Obi-Wan Kenobi" en su lista, añade también a "Yoda" como su aliado.
Verificar si el director de la película es "George Lucas" y, de ser así, añadir una nueva propiedad producer con el valor "Lucasfilm" en el nivel de la película.
Bonus: Si el release_year es anterior a 1980, cambiar el title de la película a "Star Wars: Episode IV - A New Hope". */


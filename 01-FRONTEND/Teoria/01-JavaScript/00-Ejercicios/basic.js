//! EJERCICIO 1 ---> Variables

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y; 
// console.log(z); // 15


//! EJERCICIO 2 --> Variables avanzadas 

//* 1.1 --> Dado el siguiente javascript, cambia el valor de la propiedad age a 25. const character = {name: 'Jack Sparrow', age: 10};
const character = {name: "Jack Sparrow", age: 10}
character.age = 25; //cambio el valor de la propiedad "age" a 25 
// console.log(character) --> name: 'Jack Sparrow', age: 25


/*//* 1.2 --> Declara 3 variables con los nombres y valores siguientes. Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */
let firstName = "Jon";
let lastName = "Snow";
let age = 24; 
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`); // --> Soy Jon Snow, tengo 24 años y me gustan los lobos.

//* 1.3 --> Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: `Buss myYear`, price: 19};
const toy2 = {name: `Rallo mcKing`, price: 29};
let sumaPrecios = toy1.price + toy2.price;
console.log(sumaPrecios); // --> 48

/* //* 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000; // --> actualizacion de precio a 25000 */

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice; 
console.log(car1); // 'BMW m&m', basePrice: 50000, finalPrice: 75000
console.log(car2); // 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000


//! EJERCICIO 3 --> Operadores 

//* 1.1 Multiplica 10 por 5 y muestra el resultado mediante console. *//
let Multiplica = 10 * 5;
// console.log(Multiplica); --> 50

//* 1.2 Divide 10 por 2 y muestra el resultado en un console. *//
let Divide = 10 / 2;
// console.log(Divide); --> 5

//* 1.3 Muestra mediante un console el resto de dividir 15 por 9. *//
let resto = 15 % 9;
// console.log(resto); --> 6

//* 1.4 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5. *//
let p = 10; 
let j = 5;
let o = p;
o += j;
// console.log(o); --> 15

//* 1.5 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables c = 10 y m = 5. *// 
let c = 10;
let m = 5;
let i = c;
i *= m;
// console.log(i); --> 50


//! EJERCICIO 4 --> Arrays

/* //* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola. 
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]); // HULK */


/* //* 1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; 
avengers[0] = "IRONMAN";
console.log(avengers); // IRONMAN  */


/*//* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; 
console.log(avengers.length); // 3 */


/*//* 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -2]); // Summer */


/*//* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
ultimoNombre = rickAndMortyCharacters.pop();
console.log("Primer nombre:", rickAndMortyCharacters[0]); // Primer nombre: Rick
console.log("Ultimo nombre:", rickAndMortyCharacters[rickAndMortyCharacters.length -1]); // Ultimo nombre: Summer */


/*//* 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters); // [ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ] */

/* //* quiero que me devuelva el nombre eliminado
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const eliminaNombre = rickAndMortyCharacters.splice(1, 1);
console.log("nombre eliminado:", eliminaNombre[0]); // nombre eliminado: Beth
console.log("Lista ok:", rickAndMortyCharacters); // Lista ok: [ 'Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez' ] */


//! EJERCICIO 5 --> Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
    console.log("number3 es distinto number1");
}

  if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

//! EJERCICIO 6 --> Bucles


//* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for (let i = 0; i < 10; i++){
    console.log(i);
}

//* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < 10; i++){
    if (i % 2 ===0){
        console.log(i);
        
    }
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a 'Dormido!'. */

for (let i = 1; i <= 10; i++){
    if (i < 10){
    console.log("Intentando dormir 🐑");
} else {
    console.log("Dormido!");
}
}

//! EJERCICIO 1 ---> Variables

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y; 
// console.log(z); // 15

//! EJERCICIO 2 --> Variables avanzadas *//

/* 1.1 --> Dado el siguiente javascript, cambia el valor de la propiedad age a 25. 
const character = {name: 'Jack Sparrow', age: 10}; */

const character = {name: "Jack Sparrow", age: 10}
character.age = 25; //cambio el valor de la propiedad "age" a 25 
// console.log(character) --> name: 'Jack Sparrow', age: 25

/* 1.2 --> Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.' */

let firstName = "Jon";
let lastName = "Snow";
let age = 24; 
// console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`); --> Soy Jon Snow, tengo 24 años y me gustan los lobos.

/* 1.3 --> Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes. */

const toy1 = {name: `Buss myYear`, price: 19};
const toy2 = {name: `Rallo mcKing`, price: 29};
let sumaPrecios = toy1.price + toy2.price;
// console.log(sumaPrecios); --> 48

/* 
1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
basePrice más el valor de la variable globalBasePrice. */

// let globalBasePrice = 10000; --> actualizacion de precio a 25000

let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; 

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

// console.log(car1); --> 'BMW m&m', basePrice: 50000, finalPrice: 75000
// console.log(car2); --> 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000



//! EJERCICIO 3 --> Variables avanzadas *//

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

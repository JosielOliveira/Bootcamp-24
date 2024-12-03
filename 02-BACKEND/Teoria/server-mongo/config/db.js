// Exporta una función que se conecta a la base de datos y devuelve la colección que se va a usar en la aplicación.
const { MongoClient } = require('mongodb'); // Importar el módulo MongoClient de la biblioteca mongodb para conectarse a la base de datos de MongoDB
require('dotenv').config(); // Importar el módulo dotenv para cargar las variables de entorno desde el archivo .env

const uri = process.env.MONGO_URI; // Obtener la URL de conexión a la base de datos de las variables de entorno 
const dbName = process.env.MONGO_DB; // Obtener el nombre de la base de datos de las variables de entorno 
const collectionName = process.env.MONGO_COLLECTION; // Obtener el nombre de la colección de la base de datos de las variables de entorno 

let db; // Variable para almacenar la conexión a la base de datos 

async function connectToDatabase() { // Función asincrónica para conectarse a la base de datos
    if (db) return db; // Si ya hay una conexión a la base de datos, devolverla 

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // Crear una instancia de MongoClient con la URL de conexión a la base de datos
    await client.connect(); // Conectarse a la base de datos 
    db = client.db(dbName); // Seleccionar la base de datos con el nombre especificado en las variables de entorno 
    console.log(`Conectado a la base de datos: ${dbName}`); // Mostrar un mensaje en la consola con el nombre de la base de datos a la que se ha conectado
    return db; // Devolver la conexión a la base de datos 
}

async function getCollection() { // Función asincrónica para obtener una colección de la base de datos 
    const database = await connectToDatabase(); // Conectarse a la base de datos 
    return database.collection(collectionName); // Devolver la colección de la base de datos con el nombre especificado en las variables de entorno 
}

module.exports = { // Exportar las funciones para conectarse a la base de datos y obtener una colección de la base de datos
    connectToDatabase,
    getCollection
}; 
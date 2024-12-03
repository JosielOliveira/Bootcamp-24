// Objetivo: Crear un servidor web que se conecte a una base de datos de MongoDB y devuelva un documento de una colección de la base de datos. El documento devuelto será el primero que encuentre en la colección. Si no se encuentra ningún documento, se devolverá un objeto vacío. Si hay un error al conectar a la base de datos, se devolverá un mensaje de error con el código de estado 500. El servidor escuchará en el puerto 3000 por defecto, pero se puede configurar con la variable de entorno PORT. El servidor devolverá el documento en formato JSON. El servidor se creará con Express.js. La conexión a la base de datos se realizará con el driver oficial de MongoDB para Node.js. La URL de conexión a la base de datos se obtendrá de la variable de entorno MONGODB_URI. El nombre de la base de datos se obtendrá de la variable de entorno MONGODB_DB.
const express = require('express'); // Importar el módulo express para crear el servidor web
const { getCollection } = require('./db'); // Importar la función getCollection del módulo db para conectarse a la base de datos y obtener una colección de la base de datos
require('dotenv').config(); // Importar el módulo dotenv para cargar las variables de entorno desde el archivo .env

const app = express(); // Crear una instancia de express para el servidor web 
const port = process.env.PORT || 3000; // Obtener el puerto del servidor de las variables de entorno o usar el puerto 3000 por defecto

app.get('/', async (req, res) => { // Definir una ruta para el servidor web que responda a las peticiones GET en la raíz del servidor
    try { // Manejar errores de conexión a la base de datos o de consulta
        const collection = await getCollection(); // Conectarse a la base de datos y obtener una colección de la base de datos 
        const documento = await collection.findOne({}); // Obtener el primer documento de la colección de la base de datos 
        res.json(documento); // Enviar el documento como respuesta en formato JSON 
    } catch (error) { // Capturar errores de conexión a la base de datos o de consulta 
        console.error(error); // Mostrar el error en la consola 
        res.status(500).send('Error al conectar a la base de datos'); // Enviar un mensaje de error con el código de estado 500 
    }
});

app.listen(port, () => { // Iniciar el servidor web y escuchar en el puerto especificado 
    console.log(`Servidor escuchando en http://localhost:${port}`); // Mostrar un mensaje en la consola con la URL del servidor 
});
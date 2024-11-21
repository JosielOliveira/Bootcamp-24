const http = require('http');   // Importamos el módulo http de Node.js

const server = http.createServer((req, res) => {    // Creamos un servidor con la función createServer
  console.log("🚀 ~ server ~ req:", req)  // Imprimimos en consola la petición
  res.statusCode= 200
    res.setHeader('Content-Type', 'aplication/json')
    res.end("Este es mi primer server con nombre")});  // Enviamos una respuesta al cliente con la función end

const PORT = 3000;  // Definimos el puerto en el que se ejecutará el servidor

server.listen(PORT, () => {   // Ponemos a escuchar el servidor en el puerto definido
    console.log("Este servidor es la leña");  // Imprimimos en consola un mensaje de que el servidor está corriendo
    }); 
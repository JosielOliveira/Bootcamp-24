const fs = require('fs');   // Importamos el módulo `fs` para manejar archivos del sistema de archivos 
const path = require('path');  // Importamos `path` para manejar rutas de archivos 

const pedidosPath = path.join(__dirname, '../data/pedidos.json');   // Ruta al archivo JSON donde se almacenan los pedidos 

const leerPedidos = () => {
    const data = fs.readFileSync(pedidosPath, 'utf-8');  // Leemos el archivo como texto 
    return JSON.parse(data);
};

const listarPedidos = (req, res) => {   // Controlador para listar todos los pedidos 
    const pedidos = leerPedidos();  // Obtenemos todos los pedidos 
    res.json(pedidos);  // Respondemos con la lista de pedidos en formato JSON 
};

const listarPedido = (req, res) => {  // Controlador para listar un pedido por su ID 
    const pedidos = leerPedidos(); // Obtenemos todos los pedidos 
    const id = +req.params.id;  // Convertimos el ID de los parámetros a número 
    const pedido = pedidos.find(pedido => pedido.id === id); // Buscamos el pedido por su ID 
    if (pedido) {
        res.json(pedido); // Si el pedido existe, lo devolvemos en la respuesta 
    } else {
        res.status(404).json({ error: 'Pedido no encontrado' }); // Si no existe, respondemos con un mensaje de error 
    }
};




module.exports = validarPedido; // Exportamos el controlador para validar un pedido, para poder usarlo en otros archivos
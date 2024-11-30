// Propósito: Controladores para manejar pedidos de productos en una tienda en línea 
const fs = require('fs');   // Importamos el módulo `fs` para manejar archivos del sistema de archivos 
const path = require('path');  // Importamos `path` para manejar rutas de archivos 

// Ruta al archivo JSON donde se almacenan los pedidos 
const pedidosPath = path.join(__dirname, '../data/pedidos.json');   // Ruta al archivo JSON donde se almacenan los pedidos 

// Función para leer pedidos desde el archivo JSON 
const leerPedidos = () => {
    const data = fs.readFileSync(pedidosPath, 'utf-8');  // Leemos el archivo como texto 
    return JSON.parse(data);
};

// Función para leer pedidos desde el archivo JSON 
const escribirPedidos = (pedidos) => {   // Función para escribir pedidos en el archivo JSON
    fs.writeFileSync(pedidosPath, JSON.stringify(pedidos, null, 2));  // Escribimos los pedidos en el archivo JSON con formato legible 
};

// Middleware para validar pedidos 
const listarPedidos = (req, res) => {   // Controlador para listar todos los pedidos 
    const pedidos = leerPedidos();  // Obtenemos todos los pedidos 
    res.json(pedidos);  // Respondemos con la lista de pedidos en formato JSON 
};

// Ahora quiero validar un pedido antes de agregarlo
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

// Ahora quiero agregar un pedido nuevo 
const agregarPedido = (req, res) => {  // Controlador para agregar un pedido nuevo 
    const pedidos = leerPedidos(); // Obtenemos los pedidos existentes 
    const nuevoPedido = req.body;  // Obtenemos los datos del nuevo pedido del cuerpo de la solicitud 
    nuevoPedido.id = pedidos.length + 1; // Generamos un ID único basado en la longitud del array 
    pedidos.push(nuevoPedido);  // Agregamos el nuevo pedido al array 
    escribirPedidos(pedidos);  // Guardamos los pedidos actualizados en el archivo JSON 
    res.json(nuevoPedido); // Respondemos con el pedido recién agregado 
};

// Ahora quie actualizar un pedido 
const actualizarPedido = (req, res) => {  // Controlador para actualizar un pedido por su ID 
    const pedidos = leerPedidos(); // Obtenemos los pedidos existentes 
    const id = +req.params.id;  // Convertimos el ID de los parámetros a número 
    const pedidoIndex = pedidos.findIndex(pedido => pedido.id === id); // Buscamos el índice del pedido por su ID 

    if (pedidoIndex === -1) {
        return res.status(404).json({ error: 'Pedido no encontrado' }); // Si no existe, respondemos con un mensaje de error 
    }
    const pedidoActualizado = { ...pedidos[pedidoIndex], ...req.body }; // Actualizamos el pedido con los nuevos datos 
    pedidos[pedidoIndex] = pedidoActualizado; // Reemplazamos el pedido antiguo con el actualizado 
    escribirPedidos(pedidos);  // Guardamos los pedidos actualizados en el archivo JSON 
    res.json(pedidoActualizado); // Respondemos con el pedido actualizado 
};

// Elimiar un pedido 
const eliminarPedido = (req, res) => {  // Controlador para eliminar un pedido por su ID 
    const pedidos = leerPedidos(); // Obtenemos los pedidos existentes 
    const id = +req.params.id;  // Convertimos el ID de los parámetros a número 
    const pedidosFiltrados = pedidos.filter(pedido => pedido.id !== id); // Filtramos los pedidos eliminando el que coincide con el ID 

    if (pedidosFiltrados.length === pedidos.length) {
        return res.status(404).json({ error: 'Pedido no encontrado' }); // Si el pedido no fue encontrado, devolvemos un error 404 
    }
    escribirPedidos(pedidosFiltrados);  // Guardamos los pedidos filtrados en el archivo JSON 
    res.json({ message: 'Pedido eliminado' }); // Respondemos con un mensaje de éxito 
};

module.exports = {listarPedidos, listarPedido, agregarPedido, actualizarPedido, eliminarPedido // Exportamos el controlador para validar un pedido, para poder usarlo en otros archivos
};

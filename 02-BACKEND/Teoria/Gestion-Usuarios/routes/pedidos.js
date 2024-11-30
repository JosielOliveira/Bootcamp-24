// Propósito: Manejar las rutas de pedidos de la API 
const express = require('express'); // Importar el módulo de Express para crear el enrutador de pedidos 
const router = express.Router();    // Creamos una instancia de un enrutador de Express 
const { listarPedidos, listarPedido, agregarPedido, actualizarPedido, eliminarPedido } = require('../controllers/pedidos'); // Importar los controladores de pedidos 
const validarPedido = require('../middleware/pedidoMiddleware'); // Importar el middleware de validación

// Rutas para pedidos
router.get('/', listarPedidos); // Endpoint para listar todos los pedidos 
router.get('/:id', listarPedido); // Endpoint para listar un pedido por ID 
router.post('/', validarPedido, agregarPedido); // Endpoint para agregar un pedido (con validación) 
router.put('/:id', validarPedido, actualizarPedido); // Endpoint para actualizar un pedido por ID (con validación) 
router.delete('/:id', eliminarPedido); // Endpoint para eliminar un pedido por ID 

module.exports = router; // Exportamos el enrutador de pedidos para poder ser utilizado en otros archivos 
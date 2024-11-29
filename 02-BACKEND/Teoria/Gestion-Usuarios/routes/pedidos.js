const express = require('express'); // Importar el módulo de Express para crear el enrutador de pedidos 
const router = express.Router();    // Creamos una instancia de un enrutador de Express 
const { listarPedidos, listarPedido, agregarPedido, actualizarPedido, eliminarPedido } = require('../controllers/pedidos'); // Importar los controladores de pedidos 
const validarPedido = require('../middleware/validarPedido'); // Importar el middleware de validación

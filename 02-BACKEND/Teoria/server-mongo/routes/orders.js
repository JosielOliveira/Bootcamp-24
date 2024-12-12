const express = require('express');
const { createOrder, getOrders, getOrderById, deleteOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Ruta para crear un nuevo pedido
router.post('/', authMiddleware, createOrder);

// Ruta para obtener todos los pedidos
router.get('/', authMiddleware, getOrders);

// Ruta para obtener un pedido por ID
router.get('/:id', authMiddleware, getOrderById);

// Ruta para eliminar un pedido por ID
router.delete('/:id', authMiddleware, deleteOrder);

module.exports = router;
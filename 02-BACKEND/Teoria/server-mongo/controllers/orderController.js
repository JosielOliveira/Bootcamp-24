const Order = require('../models/Order');

// Crear un nuevo pedido
const createOrder = async (req, res) => {
    const { user, items, total } = req.body;

    try {
        const newOrder = new Order({
            user,
            items,
            total
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Obtener todos los pedidos
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email');
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Obtener un pedido por ID
const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id).populate('user', 'name email');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Eliminar un pedido por ID
const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted' });
    } catch (error) {
        console.error("Error deleting order:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createOrder, getOrders, getOrderById, deleteOrder };
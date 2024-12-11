const express = require('express');
const { registerUser, authenticateUser } = require('../controllers/authController');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para autenticar un usuario
router.post('/login', authenticateUser);

module.exports = router;
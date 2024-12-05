const express = require('express'); // Importamos express
const { register, login } = require('../controllers/authController'); // Importamos los controladores de autenticación

const router = express.Router(); // Creamos una instancia del router de Express

// Definimos las rutas de autenticación
router.post('/register', register);
router.post('/login', login);

module.exports = router; // Exportamos el router para que pueda ser utilizado en otras partes de la aplicación
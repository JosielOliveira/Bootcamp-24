const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const server = express();

connectDB();

server.use(express.json());
server.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000; // Usar la variable de entorno PORT si está definida

server.listen(PORT, () => {
    console.log(`EL SERVIDOR SE INICIO CORRECTAMENTE EN EL PUERTO ${PORT}`);
});
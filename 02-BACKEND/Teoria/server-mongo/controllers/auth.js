const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Función para generar un token JWT
const generateToken = (user) => {
    return jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hashear la contraseña antes de guardar el usuario
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear un nuevo usuario
        const newUser = await User.create({ email, name, password: hashedPassword });

        // Generar el token JWT
        const token = generateToken(newUser);
        if (!token) {
            return res.status(400).json({ message: 'Error al crear el token' });
        }

        // Enviar la respuesta con el token y los datos del usuario
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: token,
        });
    } catch (error) {
        console.log("🚀 ~ registerUser ~ error:", error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// Función para autenticar un usuario
const authenticateUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Generar el token JWT
        const token = generateToken(user);
        if (!token) {
            return res.status(400).json({ message: 'Error al crear el token' });
        }

        // Enviar la respuesta con el token y los datos del usuario
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: token,
        });
    } catch (error) {
        console.log("🚀 ~ authenticateUser ~ error:", error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

module.exports = { registerUser, authenticateUser };
// Descripción: Controlador para autenticar a un usuario en la base de datos. Este controlador recibe un correo electrónico y una contraseña, verifica si el usuario existe y si la contraseña es correcta. Si todo es correcto, genera un token JWT y lo devuelve. Si hay un error, devuelve un mensaje de error. Este controlador se utilizará en la ruta de inicio de sesión. 

const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete jsonwebtoken en tu proyecto npm i jsonwebtoken 
const bcrypt = require('bcryptjs'); // Asegúrate de tener instalado el paquete bcryptjs en tu proyecto npm i bcryptjs 
const User = require('../models/User'); // Asegúrate de tener el modelo de usuario configurado

const authenticateUser = async (email, password) => {
    try {
        // Verificar si el usuario existe
        const user = await User.findOne({ email });
        if (!user) {
            return { error: 'Invalid Credentials' };
        }

        // Comparar la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return { error: 'Invalid Credentials' };
        }

        // Generar el token JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token válido por 1 hora 
        );

        return { token }; // Devuelve el token JWT  
    } catch (err) { // Manejo de errores 
        console.error(err.message); // Mensaje de error en la consola 
        return { error: 'Server error' }; // Error del servidor 
    }
};

module.exports = authenticateUser; // Exporta la función para ser utilizada en la ruta de inicio de sesión 
// Propósito: Middleware para verificar el token de autenticación en las rutas protegidas. Este middleware se utilizará en las rutas que requieran autenticación. 
const jwt = require('jsonwebtoken'); // Asegúrate de tener instalado el paquete jsonwebtoken en tu proyecto npm i jsonwebtoken

const authMiddleware = (req, res, next) => { // Middleware para verificar el token de autenticación
    // Obtener el token del encabezado de la solicitud
    const token = req.header('x-auth-token'); // Obtiene el token del encabezado de la solicitud 

    // Verificar si no hay token
    if (!token) { // Comprueba si no hay token
        return res.status(401).json({ msg: 'No token, authorization denied' }); // Devuelve un mensaje de error si no hay token
    }

    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token con la clave secreta del servidor 
        req.user = decoded.user; // Añade el usuario decodificado a la solicitud 
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' }); // Devuelve un mensaje de error si el token no es válido 
    }
};

module.exports = authMiddleware; // Exporta el middleware para ser utilizado en las rutas protegidas 

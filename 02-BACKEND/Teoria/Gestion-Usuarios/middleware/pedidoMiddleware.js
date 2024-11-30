const validarPedido = (req, res, next) => {
    const { productos, total } = req.body; // Obtenemos los datos del cuerpo de la solicitud
    if (!productos || !productos.length) { // Si no hay productos o la lista está vacía
        return res.status(400).json({ error: 'Debes enviar al menos un producto' }); // Respondemos con un error 400
    }
    if (!total || typeof total !== 'number') { // Si no hay total o no es un número
        return res.status(400).json({ error: 'Debes enviar un total válido' }); // Respondemos con un error 400
    }
    next(); // Si todo está bien, llamamos a la siguiente función en la cadena de middlewares
}; 

module.exports = validarPedido; // Exportamos el middleware
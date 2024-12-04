// ayudame a crear el archivo controllers/users.js que contenga el siguiente código:
// const User = require('../models/users'); // Importa el modelo User de models/users 

const User = require('../models/users'); // Importa el modelo User de models/users

module.exports = { // Exporta un objeto con los métodos getUsers y createUser 
    async getUsers(req, res) { // Define el método getUsers 
        try { // Maneja los errores 
            const users = await User.find({}); // Obtiene todos los usuarios
            res.json(users); // Devuelve los usuarios en formato JSON 
        } catch (error) {  // Maneja los errores
            res.status(500).send('Error al obtener los usuarios'); // Devuelve un mensaje de error
        }
    }
};

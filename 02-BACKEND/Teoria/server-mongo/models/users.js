const mongoose = require('mongoose'); // Importa el módulo mongoose

// Define un esquema para el modelo
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', UserSchema); // Crea el modelo

// Exporta el modelo
module.exports = mongoose.model('User', UserSchema);

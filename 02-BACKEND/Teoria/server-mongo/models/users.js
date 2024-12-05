// añade la funcionalidad de encriptar la contraseña antes de guardarla en la base de datos
const mongoose = require('mongoose') // 

const userSchema = new mongoose.Schema( //
    {
        name: { type: String, required: true }, 
        email: { type: String, required: true, unique: true }, 
        password: { type: String, required: true },
            type: String,
            required: true,
            minlength: 8,
    }
)

userSchema.pre('save', async function (next) {  //función que se ejecuta antes de guardar el usuario en la base de datos 
    if (!this.isModified('password')) {  //comprueba si la contraseña ha sido modificada 
        return next()  //si la contraseña no ha sido modificada, no se encripta 
    }
    this.password = await bcrypt.hash(this.password, 12) //definimos el nivel de encriptación de la contraseña 
    next() //continua con el proceso de guardado 
})

// Método para validar la contraseña
userSchema.methods.isValidPassword = async function (password) { //método para comparar la contraseña ingresada con la contraseña encriptada en la base de datos 
    return await bcrypt.compare(password, this.password); //compara las contraseñas 
};

const User = mongoose.model('User', userSchema) //crea el modelo de usuario 

module.exports = User
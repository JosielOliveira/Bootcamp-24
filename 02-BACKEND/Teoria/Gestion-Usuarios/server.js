const express = require('express') // importando el modulo de express 
const app = express() // Creamos una instancia de express
const userRouter = require('./routes/users') // importamos el archivo de rutas

// Middleware para que express pueda leer el body de las peticiones
// Middleware para validar la cabecera x-api-key
function validarApiKey(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey) {
      next(); // La cabecera está presente, continuar con la solicitud
    } else {
    res.status(401).json({ error: 'Unauthorized: x-api-key header is missing' });
    }
}

  // Usar el middleware en todas las rutas
app.use(validarApiKey);

app.use(express.json())
app.use('/users', userRouter)

app.listen(3000, ()=>{
    console.log('El servidor se inicio correctamente')
})
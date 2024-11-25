const express = require('express'); // Importamos express

const app = express();  // Creamos una instancia de express

app.use(express.json());    // Middleware para que express entienda JSON

app.get('/', (req, res) => {    // Ruta raíz
    res.status(400) // Cambiamos el estado de la respuesta
    res.send('MI GET APP CON EXPRESS')  // Enviamos una respuesta
})

app.post('/', (req, res)=>{   // Ruta
    res.send('MI POST APP CON EXPRESS') // Enviamos una respuesta
})

const PORT = 3000;  // Puerto donde correrá el servidor

app.listen(PORT, () => {    // Iniciamos el servidor
console.log(`Mi servidor puerto ${PORT}`);  // Mostramos un mensaje en consola
});
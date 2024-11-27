const express = require('express') // importando el modulo de express 
const app = express() // Creamos una instancia de express
const userRouter = require('./routes/users') // importamos el archivo de rutas
const productRouter = require('./routes/products')

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

const eliminarProducto1 = (req, res) => {  // Defino la función eliminarProducto, que recibe un id y elimina el producto con ese id. Si no existe, devuelve un 404
  const id = +req.params.id // Obtengo el id del producto a eliminar
  const productos = leerProductos() // Leo los productos
  const productoEliminado = productos.find((producto) => producto.id === id)  // Busco el producto a eliminar
  if (productoEliminado) {  // Si el producto existe
      const productosActualizados = productos.filter((producto) => producto.id !== id)  // Creo un nuevo array de productos sin el producto a eliminar
      fs.writeFileSync(productosPath, JSON.stringify(productosActualizados, null, 2)) // Guardo el nuevo array de productos en el archivo productos.json
      res.json(productoEliminado) // Devuelvo el producto eliminado
  } else {
      res.status(404) // Si el producto no existe, devuelvo un 404
      res.send('Producto no encontrado')  // Devuelvo un mensaje de error
  }
}

const eliminarProducto = (req, res) => {  // Defino la función eliminarProducto, que recibe un id y elimina el producto con ese id. Si no existe, devuelve un 404
  const id = +req.params.id // Obtengo el id del producto a eliminar
  const productos = leerProductos() // Leo los productos
  const productosActualizados = productos.filter((producto) => producto.id !== id)  // Creo un nuevo array de productos sin el producto a eliminar

  if (productos.length !== productosActualizados.length) {  // Si el tamaño del array ha cambiado, significa que el producto fue eliminado
      fs.writeFileSync(productosPath, JSON.stringify(productosActualizados, null, 2)) // Guardo el nuevo array de productos en el archivo productos.json
      const productoEliminado = productos.find((producto) => producto.id === id) // Encuentro el producto eliminado para devolverlo en la respuesta
      res.json(productoEliminado) // Devuelvo el producto eliminado
  } else {
      res.status(404) // Si el tamaño del array no ha cambiado, significa que el producto no existe
      res.send('Producto no encontrado')  // Devuelvo un mensaje de error
  }
}

module.exports = { leerProductos, listarProductos, listarProducto, agregarProducto, eliminarProducto } // Exporto las funciones para poder usarlas en otros archivos
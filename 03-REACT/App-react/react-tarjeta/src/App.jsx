import { useState, useEffect } from 'react'
import ListaProductos from './components/ListaProductos'
import './index.css'

function App() {
  const [productos, ] = useState([
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 200 },
  ])

  useEffect(() => {
    console.log('Componente montado o actualizado')
    return () => {
      console.log('Componente desmontado')
    }
  }, [productos])

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <ListaProductos productos={productos}>
        <p>Personaliza el diseño aquí</p>
      </ListaProductos>
    </div>
  )
}

export default App
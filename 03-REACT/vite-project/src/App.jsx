import { useState } from 'react'
import './App.css'
import Saludar from './components/Saludar'


function App() { 
  const [count, setCount] = useState(0)

  return (
    <>
    <Saludar nombre="Josiel" apellido="Oliveira" />
    <>¡Prueba jugar un poco con el contador!</>
    <div className="card">
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
    </>
  )
}

export default App
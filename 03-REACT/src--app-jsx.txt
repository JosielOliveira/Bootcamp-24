import './index.css'
import Tarjeta from './components/Tarjeta'

function App() {
  return (
    <div className="App">
      <h1>Proyecto REACT-COMPONENTS</h1>
      <Tarjeta titulo="Tarjeta 1" descripcion="Esta es la descripción de la tarjeta 1." />
      <Tarjeta titulo="Tarjeta 2" descripcion="Esta es la descripción de la tarjeta 2." />
    </div>
  )
}

export default App
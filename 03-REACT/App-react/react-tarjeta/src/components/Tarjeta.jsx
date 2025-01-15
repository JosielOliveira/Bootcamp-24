import { useState } from 'react'
import PropTypes from 'prop-types'

function Tarjeta({ titulo, descripcion }) {
  const [mostrarMensaje, setMostrarMensaje] = useState(false)

  const handleClick = () => {
    setMostrarMensaje(!mostrarMensaje)
  }

  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button onClick={handleClick}>
        {mostrarMensaje ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
      </button>
      {mostrarMensaje && <p>Este es el mensaje oculto</p>}
    </div>
  )
}

Tarjeta.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
}

export default Tarjeta
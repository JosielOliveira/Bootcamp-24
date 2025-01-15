import PropTypes from 'prop-types'

function TarjetaProducto({ nombre, precio }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
    </div>
  )
}

TarjetaProducto.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
}

export default TarjetaProducto
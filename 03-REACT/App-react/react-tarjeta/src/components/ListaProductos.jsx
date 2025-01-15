import PropTypes from 'prop-types'
import TarjetaProducto from './TarjetaProducto'

function ListaProductos({ productos, children }) {
  return (
    <div className="lista-productos">
      {children}
      {productos.map((producto, index) => (
        <TarjetaProducto key={index} nombre={producto.nombre} precio={producto.precio} />
      ))}
    </div>
  )
}

ListaProductos.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ).isRequired,
  children: PropTypes.node,
}

export default ListaProductos
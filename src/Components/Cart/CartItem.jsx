/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './CartItem.css'
import { Button } from 'react-bootstrap'
import 'typeface-quicksand'


const CartItem = ({productos, eliminarItem}) => {
    console.log(productos)



    return (
        < >
        <div className="carrito2Contenedor">
            <div className='carrito2'>
                <h3> {productos.productos.nombre} </h3>
                <img src={productos.productos.imagen} className="carrito2Imagen"/>
            </div>
            <div className="carrito2Detalle"> 
                <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} > Cantidad: {productos.cantidad} </h3>
                <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }} >Valor Unitario: ${productos.productos.precio } </h3>
                <h3 style={{ textAlign: 'left', fontSize: '15px', fontFamily: 'Quicksand' }}>Valor Total: ${productos.productos.precio * productos.cantidad} </h3>
                {/* <button onClick={()=> eliminarItem(productos.productos.id)} style={{ textAlign: 'center', width: '100%', marginTop: '10px', color: 'white', background: 'black'  }}>Eliminar producto</button> */}
                <Button onClick={()=> eliminarItem(productos.productos.id)} variant="dark" style={{ textAlign: 'center', width: '100%', marginTop: '10px', }}>Eliminar Producto</Button>
            </div>
        </div>
        </>
    )
}

export default CartItem;
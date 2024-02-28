/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react'
import { Card } from 'react-bootstrap'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const TarjetaDetalle = ({productos}) => {

    const [cart, setCart] = useState(false)

    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (count) => {

        setCart(true)
        agregarCarrito(productos, count)

    }
    
        return (
    <>
        <Card style={{width: '18rem'  }}>
            <Card.Img variant="top" src={productos.imagen} style={{ height: '18rem'  }}/>
            <Card.Body>
            <Card.Title>Producto: {productos.nombre}</Card.Title>
            <Card.Text> Id: {productos.id} </Card.Text>
            <Card.Text> Precio: $ {productos.precio} USD </Card.Text>
            <Card.Text> Stock: {productos.stock}  </Card.Text>

            {cart ? <Link to={'/cart'}> Ir Al Carrito </Link> : <Contador initial={1} stock={productos.stock}  onAdd={onAdd}/> }

            
            </Card.Body>
        </Card>         

    </>
    )
}

export default TarjetaDetalle